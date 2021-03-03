import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cdn.pixabay.com/photo/2019/12/10/00/23/girl-4684702_960_720.jpg'></img>
      {props.message}
      <div>
  <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;