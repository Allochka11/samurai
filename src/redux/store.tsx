import {
  addPostActionCreator,
  deletePostAC,
  savePhotoSuccess,
  setProfileStatus,
  setUserProfile,
  updateProfileStatus,
} from "./profile-reducer";
import { sendMessageActionCreator } from "./message-reducer";
import { AppStoreType } from "./redux-store";
import {
  followSuccess,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowingProgressAC,
  unfollowSuccess,
} from "./users-reducer";
import { getCaptchaUrlAC, setAuthUserDataAC, setUserAvatarAC } from "./auth-reducer";
import { initializedSuccess } from "./appReducer";

type MessagesPropsType = {
  id: number;
  message: string;
};
type DialogsPropsType = {
  id: number;
  name: string;
};
export type DialogsProps = {
  dialogs: DialogsPropsType[];
  messages: MessagesPropsType[];
  newMessageBody: string;
};
export type DialogsStorePropsType = {
  store: AppStoreType;
};

export type ProfileStorePropsType = {
  store: AppStoreType;
};
type PostDataPropsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type FriendPropsType = {
  id: number;
  name: string;
};

export type FriendStateType = {
  state: FriendPropsType[];
};
type MessagesPagePropsType = {
  dialogs: DialogsPropsType[];
  messages: MessagesPropsType[];
  newMessageBody: string;
};
type ProfilePagePropsType = {
  postData: PostDataPropsType[];
  newPostText: string;
};
export type SidebarPagePropsType = {
  friends: FriendPropsType[];
};
export type StatePropsType = {
  messagesPage: MessagesPagePropsType;
  profilePage: ProfilePagePropsType;
  sidebar: SidebarPagePropsType;
};
export type ProfilePropsType = {
  postData: PostDataPropsType[];
  newPostText: string;
};
export type StateProfilePropsType = {
  profilePage: ProfilePropsType;
  dispatch: (action: ActionsTypes) => void;
};
export type MyPostsType = {
  postData: PostDataPropsType[];
  newPostText: string;
  dispatch: (action: ActionsTypes) => void;
};
export type StoreType = {
  _state: StatePropsType;
  _rerenderEntireState: (state?: StatePropsType) => void;
  subscribe: (observer: () => void) => void;
  getState: () => StatePropsType;
  dispatch: (action: ActionsTypes) => void;
};

export type ReducersStoreType = {
  _state: ReducersPropsType;
  _rerenderEntireState: (state?: StatePropsType) => void;
  subscribe: (observer: () => void) => void;
  getState: () => StatePropsType;
  dispatch: (action: ActionsTypes) => void;
};

export type ReducersPropsType = {
  profileReducer: DialogsStorePropsType;
  messageReducer: MessagesPagePropsType;
  sidebarReducer: SidebarPagePropsType;
  dispatch: (action: ActionsTypes) => void;
};
export type ActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  // ReturnType<typeof onPostChangeActionCreator> |
  | ReturnType<typeof sendMessageActionCreator>
  // ReturnType<typeof updateNewMessageBodyActionCreator> |
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setAuthUserDataAC>
  | ReturnType<typeof setUserAvatarAC>
  | ReturnType<typeof toggleIsFollowingProgressAC>
  | ReturnType<typeof setProfileStatus>
  | ReturnType<typeof updateProfileStatus>
  | ReturnType<typeof initializedSuccess>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof savePhotoSuccess>
  | ReturnType<typeof getCaptchaUrlAC>;
