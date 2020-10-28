import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/1">Sanya Belikov</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Sanya Bratikov</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Daniil Degterev</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you</div>
                <div className={style.message}>Good, and you ?</div>
                <div className={style.message}>Me to</div>
            </div>
        </div>
    )
}

export default Dialogs;