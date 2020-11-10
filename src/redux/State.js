let rerenderEntireTree = () => {
    console.log("state changed");
}


let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessageText
    };

    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state)
};

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state; 