import { useEffect, useState } from 'react'
import Comment from './Comment';
import axios from "axios";
function CommentList(props) {

  const api = `http://localhost:8000/comment/${props.id}`
  const [commentInfo, setCommentInfo] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api)
      console.log('this is data',request)
      setCommentInfo(request.data)
      return request.data
    }
    fetchData()
  }, [api]);

  function addComment(newComment){
    setCommentInfo(prev => ([...prev, newComment]))
  }
  console.log('this is info',commentInfo)
  const commentList = commentInfo && commentInfo.map(comment => {
      return (
        <div className='comment'>
          <div className='list-header'>
            <p>{`User ${comment.first_name} ${comment.last_name} says:`}</p>
          </div>
          {comment.comment}
        </div>
      );

  });

  return (
    <div className="comment-list">
      {commentList}
      <Comment id={props.id} addComment={addComment}/>
    </div>
  );
}

export default CommentList;