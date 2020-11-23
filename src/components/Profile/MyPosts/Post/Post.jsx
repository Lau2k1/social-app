import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cdn.pixabay.com/photo/2015/11/26/22/28/girl-1064664_960_720.jpg'></img>
      {props.message}
      <div>
  <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;