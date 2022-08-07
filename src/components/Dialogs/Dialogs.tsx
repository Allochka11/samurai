import React from 'react';
import {Message} from "./Message/Message";

import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";

type DialogsPropsType = {
    // userName: string,
    // avatarUrl: string,
    // profileHeaderImg: string
}


export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Alla'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Oll'},
        {id: 4, name: 'All'},
        {id: 5, name: 'Nick'},
    ];
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How'},
        {id: 3, message: 'Are'},
        {id: 4, message: 'You?'},
        {id: 5, message: '!!!'},
    ];

    let dialogsElements = dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>
    );
    let messagesElements = messages.map((el) => <Message key={el.id} message={el.message} id={el.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>


            {/*<div className="profile__header">*/}
            {/*    <img src={props.profileHeaderImg} alt="avatar header"/>*/}
            {/*</div>*/}
            {/*<div className="profile__main">*/}
            {/*    <img src={props.avatarUrl} alt="avatar" className="profile__avatar"/>*/}
            {/*    <div className="profile__name">{props.userName}</div>*/}
            {/*</div>*/}
            {/*<MyPosts />*/}
        </div>
    )
}

// export default Dialogs;