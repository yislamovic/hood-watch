import React from "react";
import "../styles/Posts.css"
import PostFooter from "../component/PostFooter";
import { useState, useEffect } from 'react';
import CommentList from "../component/CommentList";
import axios from "axios";
import PostHeader from "../component/PostHeader";
function Post(props) {
  const api = `http://localhost:8000/reports`
  const [info, setInfo] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api)
      
      setInfo(request.data)
      return request.data
    }
    fetchData()
  }, [api]);
  console.log(info, 'this is info from post')
  const posts = info.map(post => {
    return (
      <div className='master-container'>
      <div className='all-post-container'>
      <div className='post-container'>
        <div className='post-header-container'>
          <PostHeader 
          first_name={post.first_name} 
          last_name={post.last_name}
          title={post.title}
          date_time={post.date_time}
          />
          </div>
        <div className="post-body-container">
          <div className="report-container">
            <h2 className="report-colon"><b>Report: </b></h2>
          <p className="report">{post.report}</p>
          </div>
          <div className="bottom-container">
         <div className="comment-list-container">
            <CommentList id={post.id} />
          </div>
          <PostFooter id={post.id} likes={post.up_vote} />
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  });


  return (
    <div>
      {posts}
    </div>
  );
}
export default Post;