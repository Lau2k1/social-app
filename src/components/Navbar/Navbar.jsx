import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile" activeClassName={s.activ}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Users' activeClassName={s.activ}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.activ}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.activ}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Musics' activeClassName={s.activ}>Music</NavLink>
            </div>
            <div className={s.item + ' ' + s.itemSattings}>
                <NavLink to='/Sattings' activeClassName={s.activ}>Sattings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;