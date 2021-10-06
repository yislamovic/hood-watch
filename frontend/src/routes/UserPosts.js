import React from "react";
import "../styles/Posts.css"
import PostFooter from "../component/PostFooter";
import { useState, useEffect } from 'react';
import CommentList from "../component/CommentList";
import axios from "axios";
import PostHeader from "../component/PostHeader";
import { useLocation } from "react-router-dom";

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
export default UserPosts;