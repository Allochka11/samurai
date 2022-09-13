import {ActionsTypes, MessagesPagePropsType} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
export const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Alla'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Oll'},
        {id: 4, name: 'All'},
        {id: 5, name: 'Nick'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How'},
        {id: 3, message: 'Are'},
        {id: 4, message: 'You?'},
        {id: 5, message: '!!!'},
    ],
    newMessageBody: ''
}

export const messageReducer = (state: MessagesPagePropsType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: new Date().getTime(), message: body})
            return state;
        default:
            return state;
    }
}

export let sendMessageActionCreator = () => ({type: SEND_MESSAGE}) as const;
export let updateNewMessageBodyActionCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
}) as const
