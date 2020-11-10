import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />)

    let messagesElement = props.state.messages.map(messages => <Message id={messages.id} message={messages.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage() 
    }

    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
            <div></div>
            <div className={style.textArea}>
                <textarea className={style.settingTextArea} name="message" id="" cols="50" rows="5" placeholder='Send message...'
                ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange}></textarea>
            </div>
            <div></div>
            <div>
                <button className={style.buttonSetting} onClick={addMessage}>Add post</button>
            </div>
        </div>
    )
}

export default Dialogs;