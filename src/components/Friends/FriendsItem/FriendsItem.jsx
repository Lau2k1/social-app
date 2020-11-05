import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Friends.module.css';

const FriendsItem = (props) => {

    let path = "/friends/" + props.id

    return (
        <div className={style.friends}>
            <img className={style.settingImg} src='https://i08.fotocdn.net/s122/60c360d321f19421/user_xl/2801005976.jpg'></img>
            <NavLink to={path} className={style.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default FriendsItem; 