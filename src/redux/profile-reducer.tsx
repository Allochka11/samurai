import {ActionsTypes} from "./store";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

type PhotosType = {
    small: string
    large: string
}
type ContactsProfileType = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null
}

export type ProfileType = {
    aboutMe: string,
    fullName: string
    photos: PhotosType | undefined
    userId: number
    contacts: ContactsProfileType
    lookingForAJob: boolean

}


export type PostDataPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePagePropsType = {
    postData: PostDataPropsType[]
    newPostText: string
    profile: ProfileType | null
}

let initialState: ProfilePagePropsType = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ],
    newPostText: 'it_camasutra.com',
    profile: null
}
export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionsTypes): ProfilePagePropsType => {

    switch (action.type) {
        case ADD_POST: {
            let newPostMessage: PostDataPropsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 11
            };
            return {
                ...state,
                postData: [...state.postData, newPostMessage],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
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


export let setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
}) as const