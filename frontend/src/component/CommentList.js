import { useEffect, useState } from 'react'
import Comment from './Comment';
import axios from "axios";
function CommentList(props) {

  const api = `http://localhost:8000/comment/${props.id}`
  const [commentInfo, setCommentInfo] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api)
      //console.log('this is data',request)
      setCommentInfo(request.data)
      return request.data
    }
    fetchData()
  }, [api]);

  function addComment(newComment){
    setCommentInfo(prev => ([...prev, newComment]))
  }
  //console.log('this is info',commentInfo)
  console.log(props.id, 'this is props id')
  const commentList = commentInfo && commentInfo.map(comment => {
      return (
        // <div className='comment-container'>
        <div className='comment'>
          
            <b><p>{`User ${comment.first_name} ${comment.last_name} says:`}</p></b>
            {comment.comment}
        
        </div>
        // </div>
      );

  });

  return (
    <>
    <Comment id={props.id} addComment={addComment}/>
    <div className="right-comment-list-container">
    <h2 className="comments-title">View Other Comments Below 👇</h2>
    <div className="comment-list">
      {commentList}
    </div>
    </div>
    </>
   );
}

export default CommentList;