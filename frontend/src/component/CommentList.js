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
  console.log('this is info',commentInfo)
  const commentList = commentInfo && commentInfo.map(comment => {
      return (
        <div className='comment'>
          <div className='list-header'>
            <span>{`${comment.first_name} ${comment.last_name}`}</span>
          </div>
          {comment.comment}
        </div>
      );

  });

  return (
    <div className="comment-list">
      {commentList}
      <Comment />
    </div>
  );
}

export default CommentList;