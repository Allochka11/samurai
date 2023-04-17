import React, {ChangeEvent} from 'react';
import {Message} from "./Message/Message";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsTypes} from "./DialogsContainer";
import {AddMessageReduxForm, MessageFormDataType} from "./AddMessageForm";

export const Dialogs = (props: DialogsPropsTypes) => {
    // console.log(props)

    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map((el) => <DialogItem key={el.id} name={el.name} id={el.id}/>
    );

    let messagesElements = state.messages.map((el) => <Message key={el.id} message={el.message} id={el.id}/>)
    // let newMessageBody = state.newMessageBody

    // let onNewMessageChange = (el: ChangeEvent<HTMLTextAreaElement>) => {
    //     // let body = el.target.value;
    //     // props.updateNewMessageBody(body)
    // }
    let onSubmit = (formData: MessageFormDataType) => {
        props.sendMessage(formData.newMessageBody)
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
                        <AddMessageReduxForm onSubmit={onSubmit}/>
                    </div>
                </div>

            </div>

        </div>
    )
}
