import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}/>
        </div>
    );
}

export default Profile; 