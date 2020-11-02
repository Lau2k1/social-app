import React from 'react';
import style from './MyPosts.module.css'
import Posts from './Posts/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hi, how are you?', likeCount: 50 },
        { id: 2, message: "It's my first project", likeCount: 34 },
        { id: 3, message: 'Are you stupid ?', likeCount: 0 }
    ];

    let postsElement = postsData.map(posts => <Posts id={posts.id} message={posts.message} likeCount={posts.likeCount} />)

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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;