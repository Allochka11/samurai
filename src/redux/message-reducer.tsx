import {ActionsTypes} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
export const SEND_MESSAGE = "SEND-MESSAGE";

type DialogsPropsType = {
    id: number
    name: string
}
type MessagesPropsType = {
    id: number
    message: string
}

export type MessagesPagePropsType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
}

let initialState: MessagesPagePropsType = {
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
    ]
}

export const messageReducer = (state: MessagesPagePropsType = initialState, action: ActionsTypes): MessagesPagePropsType => {
    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY: {
        //     return {...state, newMessageBody: action.body}
        // }
        case SEND_MESSAGE: {
            // let body = state.newMessageBody;
            return {
                ...state, messages: [...state.messages, {id: new Date().getTime(), message: action.newMessageBody}],
            }
        }
        default:
            return state;
    }
}

export let sendMessageActionCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody}) as const;
// export let updateNewMessageBodyActionCreator = (body: string) => ({
//     type: UPDATE_NEW_MESSAGE_BODY,
//     body: body
// }) as const
