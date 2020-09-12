import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = () => {

  const {postId} = useParams(); 
  
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`

  const [posts, setPosts] = useState({})

  useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>This is post Details</h1>
      <h3>ID: {postId}</h3>
      <p>Title: {posts.title}</p>
      <p>Body: {posts.body}</p>
      <Comment postID={postId} ></Comment>
    </div>
  );
};

export default PostDetails;