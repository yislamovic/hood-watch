import React from "react";
// import classnames from "classnames"
// import "components/Button.scss";

function Button(props) {
  //  const buttonClass = classnames("button", {
  //     "button--confirm": props.confirm,
  //     "button--danger": props.danger
  //   });

   return (
     <div className="post-comment-button">
      <button
        className="register-btn"
        id="post-comment-btn"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
      </div>
    );
}
export default Button;