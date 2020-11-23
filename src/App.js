import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Musics from "./components/Musics/Musics";
import News from "./components/News/News";
import Sattings from "./components/Sattings/Sattings";


const App = (props) => {
    debugger;
    return (
    <div className='app-wrapper' >
        < Header />
        <Navbar />
        <div className='app-wrapper-content' >
            <Route path='/dialogs'
                render={() => < Dialogs state={props.state.dialogsPage} dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch} />} />

            <Route path='/profile'
                render={() => < Profile profilePage={props.state.profilePage}dispatch={props.dispatch}/>} />
            <Route path='/News' render={() => < News />}/> 
            <Route path='/Musics' render={() => < Musics />}/> 
            <Route path='/Sattings' render={ () => < Sattings />}/> 
            </div> 
    </div>
)
}
export default App;