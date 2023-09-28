import { ActionsTypes } from "./store";
import { AnyAction, Dispatch } from "redux";
import { authAPI, profileAPI, securityAPI } from "api/api";
import { stopSubmit } from "redux-form";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppRootStateType } from "./redux-store";

export const SET_USER_DATA = "auth/SET_USER_DATA";
export const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";
export const SET_USER_AVATAR = "auth/SET_USER_AVATAR";

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;
type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

type AuthPropsType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
  avatar: string | null;
  captchaUrl: null | string;
};

let initialState: AuthPropsType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  avatar: null,
  captchaUrl: null,
};

export const authReducer = (state: AuthPropsType = initialState, action: ActionsTypes): AuthPropsType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return { ...state, captchaUrl: action.captchaUrl };
    }

    default:
      return state;
  }
};

export let setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
  ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  }) as const;

export let setUserAvatarAC = (avatar: string) =>
  ({
    type: SET_USER_AVATAR,
    avatar,
  }) as const;

export let getCaptchaUrlAC = (captchaUrl: string) =>
  ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl,
  }) as const;

export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch) => {
  try {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserDataAC(id, email, login, true));
      // dispatch(setUserAvatarAC(response.data.photos.small));
      await profileAPI.getProfile(id);
    } else {
      return console.warn("me is undefined");
    }
  } catch (e) {}
};

export const loginUserThunkCreator = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string | null,
): AppThunk => {
  return async (dispatch: AppDispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    try {
      if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
      } else {
        if (data.resultCode === 10) {
          dispatch(getCaptchaUrlTC());
        }

        let message = data.messages.length > 0 && data.messages;
        dispatch(stopSubmit("loginForm", { _error: message }));
      }
    } catch (e) {}
  };
};

export const getCaptchaUrlTC = () => {
  return async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlAC(captchaUrl));
  };
};

export const logoutUserThunkCreator = () => {
  return async (dispatch: Dispatch) => {
    let data = await authAPI.logout();
    try {
      if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
        // return <Redirect to={'/login'}/>
      } else {
        console.log("unauthorized");
      }
    } catch (e) {}
  };
};
