import React from 'react';
import {Message} from "./Message/Message";

import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType, MessagesPropsType} from "../../redux/state";

type DialogsProps = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
}

type DialogsStatePropsType = {
    state: DialogsProps
}


export const Dialogs = (props: DialogsStatePropsType) => {


    let dialogsElements = props.state.dialogs.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>
    );

    let messagesElements = props.state.messages.map((el) => <Message key={el.id} message={el.message} id={el.id}/>)
    let newMessage = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        const text = newMessage.current?.value;
        alert(text)
    }

    return (
        <div>
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
            <div className={s.send}>
                <textarea name="" ref={newMessage}></textarea>
                <button onClick={sendMessage}>send</button>
            </div>

        </div>

    )
}

// export default Dialogs;