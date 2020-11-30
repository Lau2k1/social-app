import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs updateNewMessageText={onNewMessageChange} sendMessgae={onSendMessageClick} dialogsPage={state}/>
    )
}


export default DialogsContainer;