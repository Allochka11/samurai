import React, {ChangeEvent} from 'react';
import {Message} from "./Message/Message";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsTypes} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

export const Dialogs = (props: DialogsPropsTypes) => {
    // console.log(props)

    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>
    );

    let messagesElements = state.messages.map((el) => <Message key={el.id} message={el.message} id={el.id}/>)
    let newMessageBody = state.newMessageBody


    const onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (el: ChangeEvent<HTMLTextAreaElement>) => {
        let body = el.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs__item}>
                    {dialogsElements}
                </div>
                <div>
                    <div>{messagesElements}</div>
                    <div className={s.send}>
                        <div><textarea name="" value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder={'Enter your message'}></textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>send</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
