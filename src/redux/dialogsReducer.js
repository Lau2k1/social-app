const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Grom'},
        {id: 4, name: 'Vlad'}
    ],
    messages: [
        {id: 1, message: 'Hi bro'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'bay'}
    ],

    newMessagesText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessagesText
            }
            return  {
                ...state,
                newMessagesText: '',
                messages: [...state.messages, newMessage],
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessagesText: action.newMessage
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
}

export default dialogsReducer;