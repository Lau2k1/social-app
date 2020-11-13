const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likeCount: 50 },
                { id: 2, message: "It's my first project", likeCount: 34 },
                { id: 3, message: 'Are you stupid ?', likeCount: 10 }
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Sanya belikov' },
                { id: 2, name: 'Sanya Bratikov' },
                { id: 3, name: 'Daniil Degterev' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Not bad, and you' },
                { id: 4, message: 'Me to' }
            ],
            newMessageText: ''
        },

        sideBar: {
            friends: [
                { id: 1, name: 'Sanya belikov' },
                { id: 2, name: 'Sanya Bratikov' },
                { id: 3, name: 'Daniil Degterev' }
            ]
        },
    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage =this._state.dialogsPage.newMessageText
            this._state.dialogsPage.messages.push({id: 4, message: newMessage});
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
};

export default store;
window.store = store; 