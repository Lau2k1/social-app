let rerenderEntireTree = () => {
    console.log("state changed");
}


let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likeCount: 50 },
            { id: 2, message: "It's my first project", likeCount: 34 },
            { id: 3, message: 'Are you stupid ?', likeCount: 0 }
        ],
        newPostText: 'Social-app'
    },

    messagesPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Not bad, and you' },
            { id: 4, message: 'Me to' }
        ],
        newMessageText: 'Hello',

        dialogs: [
            { id: 1, name: 'Sanya belikov' },
            { id: 2, name: 'Sanya Bratikov' },
            { id: 3, name: 'Daniil Degterev' }
        ]
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
        id: 5,
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

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state; 