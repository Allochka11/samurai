import {ActionsTypes, PostDataPropsType, ProfilePagePropsType} from "./store";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ],
    newPostText: 'it_camasutra.com'
}
export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionsTypes) => {

    //profilePage = state
    switch (action.type) {
        case ADD_POST:
            let newPostMessage: PostDataPropsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 11
            };
            state.newPostText = '';
            state.postData.push(newPostMessage);
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST}) as const
export let onPostChangeActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const