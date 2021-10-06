 import React from "react";
//  import '../styles/PostHeader.css'
 function PostHeader (props){
  return(
    <div className='post-header'>
      <p id="header-name">By: {`${props.first_name} ${props.last_name}`}</p>
      <b><p id="header-title">{props.title}</p></b>
      <p id="header-date">Created: {props.date_time}</p>
    </div>
  );
 }

 export default PostHeader;