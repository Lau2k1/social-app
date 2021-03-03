import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.photo}>

            </div>
            <div className={s.discriptionBlock}>
                <img src = 'https://cdn.pixabay.com/photo/2019/12/10/00/23/girl-4684702_960_720.jpg' />
                <button className={s.buttonEditor}>Редактировать</button>
            </div>
        </div>
    );
}

export default ProfileInfo;