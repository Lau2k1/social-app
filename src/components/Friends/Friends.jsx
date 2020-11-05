import React from 'react';
import style from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
    debugger;
    let friendsElement = props.state.friends.map(friends => <FriendsItem name={friends.name} id={friends.id} />)

    return (
        <div className={style.friends}>
            <div className={style.friendsItems}>
                {friendsElement}
            </div>
        </div>
    )
}

export default Friends;