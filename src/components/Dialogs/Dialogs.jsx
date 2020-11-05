import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />)

    let messagesElement = props.state.messages.map(messages => <Message id={messages.id} message={messages.message} />)

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