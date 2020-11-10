import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/profile'
                    render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}
                        newPostText={props.newPostText} updateNewPostText={props.updateNewPostText} />} />
                <Route path='/dialogs'
                    render={() => <Dialogs state={props.state.messagesPage} />} />
                <Route path='/friends'
                    render={() => <Friends state={props.state.sideBar} />} />

            </div>
        </div>
    );
};

export default App;