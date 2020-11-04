import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    { id: 1, message: 'Hi, how are you?', likeCount: 50 },
    { id: 2, message: "It's my first project", likeCount: 34 },
    { id: 3, message: 'Are you stupid ?', likeCount: 0 }
];

let dialogs = [
    { id: 1, name: 'Sanya belikov' },
    { id: 2, name: 'Sanya Bratikov' },
    { id: 3, name: 'Daniil Degterev' }
];

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Not bad, and you' },
    { id: 4, message: 'Me to' }
];

ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();