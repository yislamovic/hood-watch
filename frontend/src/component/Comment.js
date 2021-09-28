import { useEffect, useState } from 'react'
import Button from './Button';

function Comment(props){

  const [comment, setComment] = useState('')
  
  function isCommentEmpty(){
    if (comment === ''){
      return true
    }
    return false
  }
  //** this useEffect is for debugging */
  useEffect(() => {
    console.log(comment)
  }, [comment])

  return (
  <div className="comment-form">
    <form onSubmit={event => event.preventDefault()}>
      <label>
       Leave your comment:
       <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
      </label>
      <Button disabled={isCommentEmpty()}>Submit</Button>
    </form>
  </div>
  );
}

export default Comment;