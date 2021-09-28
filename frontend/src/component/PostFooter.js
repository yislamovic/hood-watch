import React from "react";
import ButtonGroup from "../component/ButtonGroup";
import "../styles/PostFooter.css"


function PostFooter(props) {

   return (
      <div className="post-footer">
        <p>Likes: 50 </p>
        <p>Expand Comments</p>
        <ButtonGroup/>
      </div>
  
    );
}
export default PostFooter;