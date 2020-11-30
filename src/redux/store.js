import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Привет, отцените новую фотку', likesCount: 15 },
                { id: 2, message: 'Сегодня я в ГТЭК', likesCount: 11 },
                { id: 3, message: 'I finish', likesCount: 13 },
                { id: 4, message: 'I love programming', likesCount: 45 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Sanya' },
                { id: 3, name: 'Grom' },
                { id: 4, name: 'Vlad' }
            ],
            messages: [
                { id: 1, message: 'Hi bro' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'bay' }
            ],

            newMessagesText: ''
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}





export default store;
window.store = store;
// store - OOP