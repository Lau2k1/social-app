import React from 'react';
import style from './Post.module.css';

const Posts = () => {
    return (
        <div>
            <div className={style.item}>
                <img src='https://i08.fotocdn.net/s122/60c360d321f19421/user_xl/2801005976.jpg'></img>
                    post 1
                    <div>
                        <span>like</span>
                    </div>
        		</div>
        </div>

    )
}

export default Posts;