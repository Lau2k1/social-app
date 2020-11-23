import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.photo}>
                {/*<img src='https://cdn.pixabay.com/photo/2020/03/24/11/21/thunder-4963719_960_720.jpg' />*/}
            </div>
            <div className={s.discriptionBlock}>
                <img src = 'https://cdn.pixabay.com/photo/2015/11/26/22/28/girl-1064664_960_720.jpg' />
                <button className={s.buttonEditor}>Редактировать</button>
            </div>
        </div>
    );
}

export default ProfileInfo;