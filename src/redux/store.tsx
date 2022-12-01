import {addPostActionCreator, onPostChangeActionCreator, profileReducer} from "./profile-reducer";
import {messageReducer, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {AppStoreType} from "./redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "./users-reducer";

type MessagesPropsType = {
    id: number
    message: string
}
type DialogsPropsType = {
    id: number
    name: string
}
export type DialogsProps = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
    newMessageBody: string

}
export type DialogsStorePropsType = {
    store: AppStoreType
}

export type ProfileStorePropsType = {
    store: AppStoreType
}
type PostDataPropsType = {
    id: number
    message: string
    likesCount: number
}


export type FriendPropsType = {
    id: number
    name: string
}

export type FriendStateType = {
    state: FriendPropsType[]
}
type MessagesPagePropsType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
    newMessageBody: string
}
type ProfilePagePropsType = {
    postData: PostDataPropsType[]
    newPostText: string
}
export type SidebarPagePropsType = {
    friends: FriendPropsType[]
}
export type StatePropsType = {
    messagesPage: MessagesPagePropsType
    profilePage: ProfilePagePropsType
    sidebar: SidebarPagePropsType
}
export type ProfilePropsType = {
    postData: PostDataPropsType[]
    newPostText: string
}
export type StateProfilePropsType = {
    profilePage: ProfilePropsType
    dispatch: (action: ActionsTypes) => void
}
export type MyPostsType = {
    postData: PostDataPropsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}
export type StoreType = {
    _state: StatePropsType
    _rerenderEntireState: (state?: StatePropsType) => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsTypes) => void
}

export type ReducersStoreType = {
    _state: ReducersPropsType
    _rerenderEntireState: (state?: StatePropsType) => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsTypes) => void
}

export type ReducersPropsType = {
    profileReducer: (DialogsStorePropsType)
    messageReducer: (MessagesPagePropsType)
    sidebarReducer: (SidebarPagePropsType)
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof onPostChangeActionCreator> |
    ReturnType<typeof sendMessageActionCreator> |
    ReturnType<typeof updateNewMessageBodyActionCreator> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof toggleIsFetchingAC>


let store: StoreType = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Alla'},
                {id: 2, name: 'Ann'},
                {id: 3, name: 'Oll'},
                {id: 4, name: 'All'},
                {id: 5, name: 'Nick'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How'},
                {id: 3, message: 'Are'},
                {id: 4, message: 'You?'},
                {id: 5, message: '!!!'},
            ],
            newMessageBody: ''
        },

        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It\'s my first post', likesCount: 12},
            ],
            newPostText: 'it_camasutra.com'
        },

        sidebar: {
            friends: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Petya'},
                {id: 3, name: 'Ivan'},
            ]
        }
    },
    _rerenderEntireState() {
        console.log('State was changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerenderEntireState = observer;

    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._rerenderEntireState(this._state);
    }
}
export default store;

