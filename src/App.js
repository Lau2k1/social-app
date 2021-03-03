import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from 'react-router-dom';
import Musics from "./components/Musics/Musics";
import News from "./components/News/News";
import Sattings from "./components/Sattings/Sattings";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            < Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => < DialogsContainer/>}/>

                <Route path='/profile'
                       render={() => < Profile/>}/>

                <Route path='/News' render={() => < News/>}/>
                <Route path='/Musics' render={() => < Musics/>}/>
                <Route path='/Sattings' render={() => < Sattings/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}
export default App;