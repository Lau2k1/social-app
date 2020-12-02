import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import store from '../../redux/reduxStore';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };
                return (
                    <Dialogs updateNewMessageText={onNewMessageChange} sendMessgae={onSendMessageClick} dialogsPage={state} />
                )
            }

        }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;