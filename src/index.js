import state, { subscribe } from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/State';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
                    addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();