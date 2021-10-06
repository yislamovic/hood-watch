import React from "react";
import ButtonGroup from "../component/ButtonGroup";
import Image from "../assets/vote.jpeg"
// import "../styles/PostFooter.css"
import "../styles/ButtonGroup.css"
import { useState, useEffect } from 'react';
import axios from "axios";
function PostFooter(props) {
  const [counter, setCounter] = useState(props.likes)
  const [upVoteBool, setUpVoteBool] = useState(true)
  const [downVoteBool, setDownVoteBool] = useState(true)

  useEffect(() => {
    axios.put(`http://localhost:8000/upvote/${props.id}/${counter}`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [counter])

  function upVote() {
    setCounter(prev => (prev + 1))
    setUpVoteBool(false)
    setDownVoteBool(true)
  }
  function downVote() {
    setCounter(prev => (prev - 1))
    setDownVoteBool(false)
    setUpVoteBool(true)
  }
  return (
    <>
    <div className="post-footer-container">
    <div className="vote-title-container">
    <h2>Upvote/Downvote</h2>
    </div>
      <p>Likes: {counter}</p>
      <div className='Button-Group'>
        <img className="upvote" onClick={() => upVoteBool && upVote()} src={Image} alt="UpVote" />
        <img className="downvote" onClick={() => downVoteBool && downVote()} src={Image} alt="DownVote" />
      </div>
    </div>
  </>
  );
}
export default PostFooter;