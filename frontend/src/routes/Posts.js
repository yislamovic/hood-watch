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
  
  const posts = info.map(post => {
    return (
      <div className='post'>
        <PostHeader 
        first_name={post.first_name} 
        last_name={post.last_name}
        title={post.title}
        date_time={post.date_time}
        />
        <p>{post.report}</p>
        <PostFooter id={post.id} likes={post.up_vote} />
        <CommentList id={post.id} />
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