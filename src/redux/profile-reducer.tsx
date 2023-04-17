import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export const ADD_POST = "ADD-POST";
// export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
export const UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS";

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
    // newPostText: string
    profile: ProfileType | null
    status: string
}

let initialState: ProfilePagePropsType = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ],
    // newPostText: 'it_camasutra.com',
    profile: null,
    status: ''
}
export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionsTypes): ProfilePagePropsType => {

    switch (action.type) {
        case ADD_POST: {
            let newPostMessage: PostDataPropsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 11
            };
            return {
                ...state,
                postData: [...state.postData, newPostMessage],
                // newPostText: ''
            };
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {...state, newPostText: action.newText}
        // }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_PROFILE_STATUS: {
            return {...state, status: action.status}
        }
        case UPDATE_PROFILE_STATUS: {
            return {...state, status: action.status}
        }

        default:
            return state
    }
}
export let addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
// export let onPostChangeActionCreator = (newText: string) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: newText
// }) as const


export let setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
}) as const
export let setProfileStatus = (status: string) => ({
    type: SET_PROFILE_STATUS,
    status
}) as const

export let updateProfileStatus = (status: string) => ({
    type: UPDATE_PROFILE_STATUS,
    status
}) as const

export const profileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(+userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export const getProfileStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfileStatus(+userId)
            .then(response => {
                dispatch(setProfileStatus(response));
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(updateProfileStatus(status));
                }
            })
    }
}

