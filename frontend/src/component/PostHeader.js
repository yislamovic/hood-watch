 import React from "react";
//  import '../styles/PostHeader.css'
 function PostHeader (props){
  return(
    <div className='post-header'>
      <p id="header-name">{`${props.first_name} ${props.last_name}`}</p>
      <h3 id="header-title">{props.title}</h3>
      <p id="header-date">{props.date_time}</p>
    </div>
  );
 }

 export default PostHeader;