import { useEffect, useState } from 'react'
import Comment from './Comment';

const commentData = [{
  comment: "This is appaling!",
  date: "Sep-28-6:48PM",
  firstName: "Bob",
  lastName: "Saget"
},
{
  comment: "Why is this happening to our community!? This is sickening!",
  date: "Sep-28-7:18PM",
  firstName: "John",
  lastName: "Wayne"
}
];

function CommentList(props) {

  const [state, setState] = useState([{
    comment: "",
    date: "",
    firstName: "",
    lastName: ""
  }])

  useEffect(() => {
    setState(commentData)
  }, []);

  const commentList = state.map(comment => {
   
    return (
      <div className='comment'>
        <div className='list-header'>
          <span>{`${comment.firstName} ${comment.lastName}`}</span>
          <span>{comment.date}</span>
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