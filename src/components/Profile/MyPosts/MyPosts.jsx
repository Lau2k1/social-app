import React from 'react';
import { addPostActionCreatro, updateNewPostTextActionCreator } from '../../../redux/State';
import style from './MyPosts.module.css'
import Posts from './Posts/Post';


const MyPosts = (props) => {
    let postsElements = props.postsData.map(posts => <Posts message={posts.message} likeCount={posts.likeCount} />)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreatro());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={style.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea name="" id="" cols="60" rows="5"
                        placeholder='Send post...' ref={newPostElement}
                        value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;