import { useEffect, useState, useContext } from 'react'
import Button from './Button';
import useForm from "../hooks/useForm";
import axios from 'axios';
import { authContext } from '../providers/AuthProvider'
function Comment(props) {

  // const [comment, setComment] = useState('')
  const { handleChange, handleSubmit, values, setValues } = useForm(insertComment);
  const [isDisabled, setIsDisabled] = useState(true);
  const { user } = useContext(authContext);
  
  const comment = values.comment

  const api = `http://localhost:8000/comment`
  function insertComment() {
    const userObj = JSON.parse(localStorage.getItem("user"))
    if (userObj) {
      console.log(comment)
      console.log(values)
      axios.post(api, { comment, id: props.id, user_id: userObj.id })
        .then((res) => {
          const newCommentObj = Object.assign(res.data, userObj)
          console.log(newCommentObj, 'this is sparta')
          props.addComment(newCommentObj)
          setValues({comment: ''})
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      alert("You need to be signed in to write a comment!")
    }
  }
  //** this useEffect is for debugging */
  useEffect(() => {
    if (Object.values(values).filter(value => value !== "").length === 1) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [values])
  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <h2>Make A Comment: </h2>
        <textarea
          name="comment"
          className="post-textarea"
          type="text"
          placeholder={'Write your comment here'}
          value={comment}
          onChange={handleChange}
        />
        <Button disabled={isDisabled}>Submit</Button>
      </form>
    </div>
  );
}

export default Comment;