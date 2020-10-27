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
                <Posts message='Hi, how are you?' likeCount='50'/>
                <Posts message="It's my first project" likeCount='34'/>
                <Posts message="Are you stupid ?" likeCount='0'/>
            </div>
        </div>
    )
}

export default MyPosts;