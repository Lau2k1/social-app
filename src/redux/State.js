
let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likeCount: 50 },
            { id: 2, message: "It's my first project", likeCount: 34 },
            { id: 3, message: 'Are you stupid ?', likeCount: 0 }
        ]
    },

    messagesPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Not bad, and you' },
            { id: 4, message: 'Me to' }
        ],

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

export default state;