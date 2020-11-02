import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

let dialogs = [
    { id: 1, name: 'Sanya belikov' },
    { id: 2, name: 'Sanya Bratikov' },
    { id: 3, name: 'Daniil Degterev' }
]

let dialogsElement = dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />)

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Not bad, and you' },
    { id: 4, message: 'Me to' }
];

let messagesElement = messages.map(messages => <Message id={messages.id} message={messages.message} />)

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;