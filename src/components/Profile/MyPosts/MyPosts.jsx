import React from 'react';
import style from './MyPosts.module.css'
import Posts from './Posts/Post';

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea name="" id="" cols="60" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Posts message='Hi, how are you?' likeCount='50' />
                <Posts message="It's my first project" likeCount='34' />
                <Posts message="Are you stupid ?" likeCount='0' />
            </div>
        </div>
    )
}

export default MyPosts;