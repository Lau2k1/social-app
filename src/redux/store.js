import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store; 