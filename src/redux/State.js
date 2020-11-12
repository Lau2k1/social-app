let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likeCount: 50 },
                { id: 2, message: "It's my first project", likeCount: 34 },
                { id: 3, message: 'Are you stupid ?', likeCount: 10 }
            ],
            newPostText: 'Social-app'
        },
    
        messagesPage: {
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
            newMessageText: 'Hello'
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
    dispatch (action) {
        if (action.type === 'ADD-POST') {
                let newPost = {
                    id: 4,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
                };
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            } else if (action.type === 'ADD-MESSAGE') {
                let newMessage = {
                    id: 5,
                    message: this._state.messagesPage.newMessageText
                };
            
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber(this._state)
            } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
                this._state.messagesPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
            }
        }
}

export default store; 
window.store = store; 