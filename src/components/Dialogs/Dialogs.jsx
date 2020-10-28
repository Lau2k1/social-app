import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Sanya Belikov" id="1" />
                <DialogItem name="Sanya Bratikov" id="2" />
                <DialogItem name="Daniil Degterev" id="3" />
            </div>
            <div className={style.messages}>
                <Message message="Hi" />
                <Message message="How are you" />
                <Message message="Good, and you" />
                <Message message="Me to" />
            </div>
        </div>
    )
}

export default Dialogs;