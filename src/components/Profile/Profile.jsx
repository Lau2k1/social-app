import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost}
                newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile; 