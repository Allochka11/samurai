import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {


    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messageReducer

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageActionCreator());
                    }
                    let onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyActionCreator(body))
                    }

                    return (
                        <Dialogs
                            updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
