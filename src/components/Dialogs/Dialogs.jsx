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

let dialogsData = [
    { id: 1, name: 'Sanya belikov' },
    { id: 2, name: 'Sanya Bratikov' },
    { id: 3, name: 'Daniil Degterev' }
];

let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Not bad, and you' },
    { id: 4, message: 'Me to' }
];

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[2].id} />
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;