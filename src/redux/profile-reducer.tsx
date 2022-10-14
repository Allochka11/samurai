import {ActionsTypes} from "./store";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type PostDataPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePagePropsType = {
    postData: PostDataPropsType[]
    newPostText: string
}

let initialState: ProfilePagePropsType = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ],
    newPostText: 'it_camasutra.com'
}
export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionsTypes): ProfilePagePropsType => {

    switch (action.type) {
        case ADD_POST: {
            let newPostMessage: PostDataPropsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 11
            };
            let stateCopy = {...state, postData: [...state.postData]};

            stateCopy.postData.push(newPostMessage);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST}) as const
export let onPostChangeActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const