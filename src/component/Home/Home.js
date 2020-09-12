import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

  const[posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  return (
    <div>

      {
        posts.map(pst => <Post posts={pst}></Post> )
      }
      
    </div>
  );
};

export default Home;