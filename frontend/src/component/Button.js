import React from "react";
// import classnames from "classnames"
// import "components/Button.scss";

function Button(props) {
  //  const buttonClass = classnames("button", {
  //     "button--confirm": props.confirm,
  //     "button--danger": props.danger
  //   });

   return (
      <button
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
}
export default Button;