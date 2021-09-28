import { checkPropTypes } from 'prop-types';
import { useState } from 'react'

import Button from './Button';
function Comment(props){

  const [comment, setComment] = commentState('')

  function isCommentEmpty(){
    const input = document.getElementsByTagName("input")
    if (!input.value){
      return disabled = true
    }
  }

  return (
  <div className="comment-form">
    <form>
      <label>
       Leave your comment:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <Button>Submit</Button>
    </form>
  </div>
  );
}

export default Comment;