import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let newMessageText = React.createRef();

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} />);

    let onSendMessageClick = () => {
        props.sendMessgae();
    }

    let onNewMessageChange = (e) => {
        let text = newMessageText.current.value;
        props.updateNewMessageText(text);
    };
debugger;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.verticalLine + ' ' + s.messages}>
                {messagesElements}
            </div>
            <div>
            </div>
            <div>
                <textarea ref={newMessageText} value={props.newMessageText} onChange={onNewMessageChange}
                    className={s.textAreaSetting} placeholder='Отправте сообщение...' />
                <button onClick={onSendMessageClick} className={s.buttonSetting}>Отправить</button>
            </div>
        </div>
    )
}


export default Dialogs;