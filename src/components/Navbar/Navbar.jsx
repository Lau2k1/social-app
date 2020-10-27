import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <a href="/profile">Profile</a>
        </div>
        <div className={style.item}>
            <a href="/dialogs">Messages</a>
        </div>
        <div className={style.item}>
            <a href="/profile">News</a>
        </div>
        <div className={style.item}>
            <a href="/profile">Music</a>
        </div>
        <div className={style.item}>
            <a href="/profile">Settings</a>
        </div>
    </nav>
}

export default Navbar;