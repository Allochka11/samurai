import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {AppRootStateType} from "./redux-store";
import {Redirect} from "react-router-dom";


export const SET_USER_DATA = "SET_USER_DATA";
export const SET_USER_AVATAR = "SET_USER_AVATAR";

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;
type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

type AuthPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    avatar: string | null
}

let initialState: AuthPropsType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    avatar: null
}

export const authReducer = (state: AuthPropsType = initialState, action: ActionsTypes): AuthPropsType => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state;
    }
}

export let setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
}) as const;

export let setUserAvatarAC = (avatar: string) => ({
    type: SET_USER_AVATAR,
    avatar
}) as const;


export const getAuthUserDataThunkCreator = () => {


    return (dispatch: Dispatch) => {
        return authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;

                    // console.log(data.data)
                    dispatch(setAuthUserDataAC(id, email, login, true));
                    profileAPI.getProfile(id)
                        .then(response => {
                            dispatch(setUserAvatarAC(response.data.photos.small));
                        })
                }

            })

    }
}

export const loginUserThunkCreator = (email: string, password: string, rememberMe: boolean): AppThunk => {

    return (dispatch: AppDispatch) => {

        authAPI.login(email, password, rememberMe)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator())
                } else {
                    let message = data.messages.length > 0 && data.messages
                    dispatch(stopSubmit('loginForm', {_error: message}))
                }
            })
    }
}
export const logoutUserThunkCreator = () => {

    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false));
                    // return <Redirect to={'/login'}/>
                } else {
                    console.log('unauthorized')
                }
            })
    }
}





