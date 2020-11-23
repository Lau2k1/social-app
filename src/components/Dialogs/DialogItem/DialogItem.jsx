import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://sun9-8.userapi.com/c855132/v855132255/b99d7/uGd5xcVJgNQ.jpg'/>
            <NavLink activeClassName={s.active} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;