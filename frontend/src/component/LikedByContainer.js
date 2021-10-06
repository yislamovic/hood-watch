import React from "react";
import ButtonGroup from "../component/ButtonGroup";
import Image from "../assets/vote.jpeg"
import "../styles/ButtonGroup.css"
import { useState, useEffect } from 'react';
import axios from "axios";
import LikedBy from "./LikedBy";
function LikedByContainer() {
 
  return (
    <>
    <div className="post-footer-container">
    <div className="vote-title-container">
    <h2>Upvote/Downvote</h2>
    </div>
      <div className="liked-by">
        <LikedBy />
      </div>
      
        {/* <img className="upvote" onClick={() => upVoteBool && upVote()} src={Image} alt="UpVote" />
        <img className="downvote" onClick={() => downVoteBool && downVote()} src={Image} alt="DownVote" /> */}
     
    </div>
  </>
  );
}
export default LikedByContainer;