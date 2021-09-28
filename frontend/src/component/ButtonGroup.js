import React from "react";
import Image from "../assets/vote.jpeg"
import  "../styles/ButtonGroup.css";
// import classnames from "classnames"
// import "components/Button.scss";

function ButtonGroup(props) {
  //  const buttonClass = classnames("button", {
  //     "button--confirm": props.confirm,
  //     "button--danger": props.danger
  //   });

   return (
        <div className='Button-Group'>
          <img className="upvote" onClick={() => console.log("click")} src={Image} alt="UpVote"/>
          <img className="downvote" onClick={() => console.log("click")} src={Image} alt="DownVote"/>
        </div>
    );
}
export default ButtonGroup;