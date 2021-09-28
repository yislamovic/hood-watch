import React from "react";
import "../styles/Posts.css"
import PostFooter from "../component/PostFooter";
import { useState, useEffect } from 'react';
const postData = [{
  title: 'Littering in Park!!!',
  description: 'A saw a ******* hobo littering in the park the other day. My son was there and he looked at us funny. How dare you hobo! I will have you know I have family in the police force!!1!! If your reading this you should watch ur back; but since im a good secular-humanist women i will first offer you a place in my home so you can get urself up and running like an old car that needs its alternator replaced. Its JONS will.',
  likes: 601
},
{
  title: 'Stolen Iphone at a starBucks!!!11!!!',
  description: 'I was at a starbucks sippin on my vente grange mocha crapa latte, when all of the sudden this large man witha ski mask politly asked for my cellular device. But he strongly suggested that if i didnt i might get hurt so i just gave it to him and now im without a cellphone.',
  likes: 159
}
]
function Post(props) {

  const [state, setState] = useState([{
    title: "",
    description: "",
    likes: 0
  }])

  useEffect(() => {
    setState(postData)
  }, []);
  
  const posts = state.map(post =>{
    console.log('this is post inside map',post)
    console.log('this is title inside map',post.title)
    console.log('this is likes inside map',post.likes)
    return (
      <div className='post'>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <PostFooter likes={post.likes}/>
      </div>
    );
  });

  console.log('this is state',state)
  console.log('this is posts',posts)

   return (
    <div>
      {posts}
    </div>
    );
}
export default Post;