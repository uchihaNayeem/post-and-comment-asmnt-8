import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
  const {id, title, body, userId} = props.posts;

  const postStyle = {
    margin: '20px',
    padding: '20px',
    borderRadius: '20px',
    border: '1px solid black',

  }
  
  const history = useHistory();

  const handleClick = (id) => {
    const url = `/comments/${id}`
    history.push(url)
  }


  return (
    <div style={postStyle} >
     <h2> Post ID: {id}</h2>
     <p>Title: {title}</p>
     <p>Body: {body}</p>
     <p>userId: {userId}</p>

  {/* <Link to={`/comments/${id}`} >
   
   <Button variant="outlined"  color="primary" >Show Details {id}</Button>
  </Link> */}

  <Button 
    onClick={() => handleClick(id)} 
    variant="outlined"  
    color="primary" 
    >Show Details</Button>

  {/* <button>Show Details {id}</button> */}
      
    </div>
  );
};

export default Post;