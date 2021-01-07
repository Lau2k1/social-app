import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessagesText: state.dialogsPage.newMessagesText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessagesText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessgae: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;