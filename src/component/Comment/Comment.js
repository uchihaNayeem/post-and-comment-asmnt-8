import React, { useEffect, useState } from 'react';
import CommentAll from '../CommentAll/CommentAll';

const Comment = (props) => {

  const [comment, setComment] = useState([])

  const url = `https://jsonplaceholder.typicode.com/comments?postId=${props.postID}`

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setComment(data))
  },[])


  return (
    <div>
      {
        comment.map(cmnt => <CommentAll  comment={cmnt}></CommentAll> )
      }
      
    </div>
  );
};

export default Comment;