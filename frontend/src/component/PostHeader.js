 import React from "react";
 import '../styles/PostHeader.css'
 function PostHeader (props){
  return(
    <div className='header'>
      <p>{`${props.first_name} ${props.last_name}`}</p>
      <h3>{props.title}</h3>
      <p>{props.date_time}</p>
    </div>
  );
 }

 export default PostHeader;