import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";


export const SET_USER_DATA = "SET_USER_DATA";
export const SET_USER_AVATAR = "SET_USER_AVATAR";

type AuthPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    avatar: string | null
}

let initialState: AuthPropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    avatar: null
}

export const authReducer = (state: AuthPropsType = initialState, action: ActionsTypes): AuthPropsType => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export let setAuthUserDataAC = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
}) as const;

export let setUserAvatarAC = (avatar: string) => ({
    type: SET_USER_AVATAR,
    avatar
}) as const;


export const getAuthThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(data => {
                let {id, email, login} = data.data;
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(id, email, login));
                    profileAPI.getProfile(id)
                        .then(response => {
                            dispatch(setUserAvatarAC(response.data.photos.small));
                        })
                }
            })
    }
}





