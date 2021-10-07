import React from "react";
import PostFooter from "../component/PostFooter";
import { useState, useEffect } from 'react';
import axios from "axios";
import PostHeader from "../component/PostHeader";
import { useLocation } from "react-router-dom";
import useForm from "../hooks/useForm";
import "../styles/Posts.css"
import { formatDate } from '../helper/helperFormatDate.js'
const Form = (props) => {
  const { post, deletePost, submitUpdate } = props
  const { handleChange, handleSubmit, values, setValues } = useForm(updatePost, post);
  const [state, setState] = useState(false)

  function updatePost() {
    console.log('axios request')
    submitUpdate(post, values)
    setState(false)

  }
  return (
    <div className='user-post-container' key={post.id}>
      <div className="user-header-container">
        <div className='user-header'>
          <span>{post.first_name + ' ' + post.last_name}</span>
          <span>{post.title}</span>
          <span>{'Created: ' + formatDate(post.date_time)}</span>
        </div>
      </div>

      <div className='post-report-body'>
        <p>{post.report}</p>
      </div>


      <div className='update-and-delete-container'>
        <span className='user-update' onClick={() => setState(true)}>📝 Update</span>
        <span className='user-delete' onClick={() => deletePost(post.id)}>🗑️ Delete</span>
      </div>

      {state && <div >
        <form className='user-form' onSubmit={handleSubmit}>

          <div className='user-category-title'>
            <label>Edit Title:
            </label>
            <textarea
              name='title'
              onChange={handleChange}
              rows="3" cols="15">
              {post.title}
            </textarea>
            <label>Category:</label>
            <select name="category" onChange={handleChange}>
              <option value="trending">Trending</option>
              <option value="celebrate">Celebrate</option>
              <option value="caution">Caution</option>
              <option value="report-crime">Report A Petty Crime</option>
              <option value="community-news">Community News</option>
              <option value="community-question">Question</option>
              <option value="other">Other</option>
            </select>
          </div>

          <label>Edit Body:
          </label>
          <textarea
            name='report'
            onChange={handleChange}
            rows="5" cols="33">
            {post.report}
          </textarea>
          <button type='submit' >Submit Edit</button>
        </form>
      </div>}

    </div>
  );
}
function UserPosts(props) {

  const [info, setInfo] = useState([])

  const userObj = JSON.parse(localStorage.getItem("user"))
  const api = `http://localhost:8000/reports/${userObj.id}`

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api)
      setInfo(request.data)
      return request.data
    }
    fetchData()
  }, [api]);
  console.log(info, 'this is info from post')

  function submitUpdate(postObj, values) {
    console.log(info, 'this is info before map!!!')
    console.log(values, 'this is values before map!!!')
    const update = info && info.map(post => {
      if (post.id === postObj.id) {

        post.title = values.title
        post.category = values.category
        post.report = values.report
      }
    });
    setInfo(info)
  }

  function deletePost(postID) {
    const updatedPosts = info && info.filter(post => post.id !== postID);
    setInfo(updatedPosts)
    console.log(posts, 'this is posts with null')
    axios.delete(`http://localhost:8000/delete/${postID}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const posts = info && info.map(post => {
    return (<Form post={post} deletePost={deletePost} submitUpdate={submitUpdate}></Form>)
  });


  return (
    <div className="user-posts-container-master">
      {posts}
    </div>
  );
}
export default UserPosts;