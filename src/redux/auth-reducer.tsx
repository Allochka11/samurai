import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";


export const SET_USER_DATA = "SET_USER_DATA";
export const SET_USER_AVATAR = "SET_USER_AVATAR";
export const LOGIN_USER = "LOGIN_USER";

type AuthPropsType = {
    id: number | null
    login: string | null
    email: string | null
    password: string | null
    rememberMe: boolean
    isAuth: boolean
    avatar: string | null
}

let initialState: AuthPropsType = {
    id: null,
    login: null,
    email: null,
    password: null,
    rememberMe: false,
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
        case LOGIN_USER: {
            debugger
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
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

export let loginUser = (email: string, password: string, rememberMe: boolean) => ({
    type: LOGIN_USER,
    email, password, rememberMe
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

export const loginUserThunkCreator = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe = false)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(loginUser(email, password, rememberMe))
                } else {
                    console.log('unauthorized')
                }
                // let {id, email, login} = data.data;
                // if (data.resultCode === 0) {
                //     // dispatch(loginUser(login, password, rememberMe))
                // }
            })
    }
}





