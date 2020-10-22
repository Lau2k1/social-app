import React from 'react';
import style from './Myposts.module.css'
import Posts from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="60" rows="5"></textarea>
                <br/>
                <button>Add post</button>
     		</div>
            <div className={style.posts}>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>
        </div>
    )
}

export default MyPosts;