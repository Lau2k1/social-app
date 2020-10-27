import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Sanya Belikov
                </div>
                <div className={style.dialog}>
                    Sanya Bratikov
                </div>
                <div className={style.dialog}>
                    Daniil Degterev
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