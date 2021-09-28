import React from "react";
import "../styles/Posts.css"
import PostFooter from "../component/PostFooter";
// import classnames from "classnames"
// import "components/Button.scss";

function Post(props) {
  //  const buttonClass = classnames("button", {
  //     "button--confirm": props.confirm,
  //     "button--danger": props.danger
  //   });

   return (
      <div className='post'>
        <h3>Title</h3>
        <p>Description</p>
        <PostFooter/>
      </div>
    );
}
export default Post;