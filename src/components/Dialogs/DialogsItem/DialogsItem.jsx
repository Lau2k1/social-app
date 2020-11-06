import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={style.dialog}>
            <img src='https://i08.fotocdn.net/s122/60c360d321f19421/user_xl/2801005976.jpg'></img>
            <NavLink to={path} className={style.activeLink}>{props.name}</NavLink>
        </div>
        
    )
}

export default DialogItem; 