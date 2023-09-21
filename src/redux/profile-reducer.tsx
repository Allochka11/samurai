import { ActionsTypes } from "./store";
import { Dispatch } from "redux";
import { profileAPI } from "api/api";
import profile from "components/Profile/Profile";

export const ADD_POST = "ADD-POST";
export const DELETE_POST = "DELETE_POST";
// export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
export const UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS";
export const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

type PhotosType = {
  small: string;
  large: string;
};
type ContactsProfileType = {
  facebook: string;
  website: string | null;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string | null;
  github: string;
  mainLink: string | null;
};

export type ProfileType = {
  aboutMe?: string;
  fullName?: string;
  photos?: PhotosType | undefined;
  userId?: number;
  contacts?: ContactsProfileType | undefined;
  lookingForAJob?: boolean;
};

export type PostDataPropsType = {
  id: number;
  message: string;
  likesCount: number;
};
export type ProfilePagePropsType = {
  postData: PostDataPropsType[];
  // newPostText: string
  profile: ProfileType | null;
  status: string;
};

let initialState: ProfilePagePropsType = {
  postData: [
    { id: 1, message: "Hi, how are you?", likesCount: 11 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ],
  profile: null,
  status: "",
};
export const profileReducer = (
  state: ProfilePagePropsType = initialState,
  action: ActionsTypes,
): ProfilePagePropsType => {
  switch (action.type) {
    case ADD_POST: {
      let newPostMessage: PostDataPropsType = {
        id: new Date().getTime(),
        message: action.newPostText,
        likesCount: 11,
      };
      return {
        ...state,
        postData: [...state.postData, newPostMessage],
      };
    }
    case DELETE_POST: {
      return { ...state, postData: state.postData.filter((el) => el.id !== action.id) };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_PROFILE_STATUS: {
      return { ...state, status: action.status };
    }
    case UPDATE_PROFILE_STATUS: {
      return { ...state, status: action.status };
    }
    case SAVE_PHOTO_SUCCESS: {
      // debugger;
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
      };
    }

    default:
      return state;
  }
};
export let addPostActionCreator = (newPostText: string) => ({ type: ADD_POST, newPostText }) as const;
export let deletePostAC = (id: number) => ({ type: DELETE_POST, id }) as const;

export let setUserProfile = (profile: ProfileType) =>
  ({
    type: SET_USER_PROFILE,
    profile,
  }) as const;
export let setProfileStatus = (status: string) =>
  ({
    type: SET_PROFILE_STATUS,
    status,
  }) as const;
export let savePhotoSuccess = (photos: PhotosType) =>
  ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
  }) as const;

export let updateProfileStatus = (status: string) =>
  ({
    type: UPDATE_PROFILE_STATUS,
    status,
  }) as const;

export const profileThunkCreator = (userId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await profileAPI.getProfile(+userId);
      dispatch(setUserProfile(response.data));
    } catch (e) {}
  };
};

export const getProfileStatusThunkCreator = (userId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await profileAPI.getProfileStatus(+userId);
      if (response) {
        dispatch(setProfileStatus(response));
      }
    } catch (e) {}
  };
};
export const updateStatus = (status: string) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(updateProfileStatus(status));
      }
    } catch (e) {}
  };
};

export const savePhoto = (file: File) => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await profileAPI.setPhoto(file);
      if (response.data.resultCode === 0) {
        // debugger;
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
    } catch (e) {
      console.log(e);
    }
  };
};
