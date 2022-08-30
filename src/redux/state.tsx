export type MessagesPropsType = {
    id: number
    message: string
}
export type DialogsPropsType = {
    id: number
    name: string
}
export type PostDataPropsType = {
    id: number
    message: string
    likesCount: number
}
export type FriendPropsType = {
    id: number
    name: string
}
export type MessagesPagePropsType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
}
export type ProfilePagePropsType = {
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
export type DispatchType = (action: AddPostActionType | ChangeNewTextActionType) => void
export type StateProfilePropsType = {
    profilePage: ProfilePropsType
    dispatch: DispatchType
}
export type MyPostsType = {
    postData: PostDataPropsType[]
    newPostText: string
    dispatch: DispatchType
}
export type AppPropsType = {
    state: StatePropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export type StoreType = {
    _state: StatePropsType
    _rerenderEntireState: (state?: StatePropsType) => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: DispatchType
}

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText?: string
}

export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

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
            ]
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
        // debugger
        if (action.type === 'ADD-POST') {
            let newPostMessage: PostDataPropsType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 11
            };
            this._state.profilePage.newPostText = '';
            this._state.profilePage.postData.push(newPostMessage);
            this._rerenderEntireState(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireState(this._state);
        }
    }

}
export default store;

