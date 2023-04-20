import {ActionsTypes} from "./store";
import {AnyAction, Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from "./redux-store";
import {getAuthUserDataThunkCreator} from "./auth-reducer";

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;
type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
export const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


type AuthPropsType = {
    initialized: boolean
}

let initialState: AuthPropsType = {
    initialized: false
}

export const appReducer = (state: AuthPropsType = initialState, action: ActionsTypes): AuthPropsType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS : {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export let initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
}) as const;

export const initializeAppThunkCreator = (): AppThunk => (dispatch: AppDispatch) => {

    dispatch(getAuthUserDataThunkCreator())
        .then(() => {

            dispatch(initializedSuccess())
        });

}


