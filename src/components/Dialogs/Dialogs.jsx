import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onSendMessageClick = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

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
                <textarea ref={newMessageElement}
                    value={props.state.newMessageText}
                    onChange={onSendMessageClick}
                    className={s.textAreaSetting}
                    placeholder='Отправте сообщение...'
                />

                <button onClick={addMessage} className={s.buttonSetting}>Отправить</button>
            </div>
        </div>
    )
}


export default Dialogs;