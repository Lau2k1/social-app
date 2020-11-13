import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />)

    let messagesElement = props.state.messages.map(messages => <Message id={messages.id} message={messages.message} />)

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div className={style.textArea}>
                        <textarea className={style.settingTextArea} name="message" id="" cols="50" rows="5" placeholder='Write message...'
                            value={props.state.newMessageText} onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button className={style.buttonSetting} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;