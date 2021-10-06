import React from "react";
import PostFooter from "../component/PostFooter";
import { useState, useEffect } from 'react';
import axios from "axios";
import PostHeader from "../component/PostHeader";
import { useLocation } from "react-router-dom";
import useForm from "../hooks/useForm";
import "../styles/Posts.css"
function UserPosts(props) {
  const [info, setInfo] = useState([])
  const [state, setState] = useState(false)
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

  function updatePost(postID) {
    setState(true)
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
    return (
      <div className='user-post-container'>
        <div className="user-header-container">
          <div className='user-header'>
            <span>{post.first_name + ' ' + post.last_name}</span>
            <span>{post.title}</span>
            <span>{post.date_time}</span>
          </div>
        </div>

        <div className='post-report-body'>
          <p>{post.report}</p>
        </div>


        <div className='update-and-delete-container'>
          <span onClick={() => updatePost(post.id)}>📝 Update</span>
          <span onClick={() => deletePost(post.id)}>🗑️ Delete</span>
        </div>

        {state && <div >
          <p onClick={() => setState(false)}>click me</p>
          <form className='user-form'>
            <div className='user-title-label-container'>
              <div className='user-category-title'>
                <label>Edit Title:
                </label>
                <textarea
                  rows="3" cols="15">
                  {post.title}
                </textarea>
              </div>
            </div>
            <label>Category:</label>
            <select name="category">
              <option value="trending">Trending</option>
              <option value="celebrate">Celebrate</option>
              <option value="caution">Caution</option>
              <option value="report-crime">Report A Petty Crime</option>
              <option value="community-news">Community News</option>
              <option value="community-question">Question</option>
              <option value="other">Other</option>
            </select>

            <label>Edit Body:
            </label>
            <textarea
              rows="5" cols="33">
              {post.report}
            </textarea>

          </form>
        </div>}

      </div>
    );
  });


  return (
    <>
      {posts}
    </>
  );
}
export default UserPosts;