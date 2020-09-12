import React from 'react';

const CommentAll = (props) => {
  const {postId, name, email, body} = props.comment;

  const commentStyle ={
    backgroundColor: '#00b8ff52', 
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
    
  }
  
  return (
    <div style={commentStyle}>
      <h3>ID: {postId}</h3>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default CommentAll;