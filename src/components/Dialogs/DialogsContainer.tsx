import React from 'react';
import {DialogsStorePropsType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = (props: DialogsStorePropsType) => {

    let state = props.store.getState().messageReducer

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )
}
