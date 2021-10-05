import { useEffect, useState } from 'react'
import Button from './Button';
import useForm from "../hooks/useForm";
import axios from 'axios';
function Comment(props) {

  // const [comment, setComment] = useState('')
  const { handleChange, handleSubmit, values, setValues } = useForm(insertComment);
  const [isDisabled, setIsDisabled] = useState(true);
  const comment = values.comment

  const api = `http://localhost:8000/comment`
  function insertComment() {
    console.log(comment)
    console.log(values)
    axios.post(api, { comment, id: props.id })
      .then((res) => {
        props.addComment(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
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
        <input
          name='comment'
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