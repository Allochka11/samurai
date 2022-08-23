let rerenderEntireState = () => {
    console.log('State was changed')
}


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

export type StateProfilePropsType = {
    profilePage: ProfilePropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export type MyPostsType = {
    postData: PostDataPropsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export type AppPropsType = {
    state: StatePropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export let state: StatePropsType = {

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
}

export const addPost = () => {
    let newPostMessage: PostDataPropsType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 11
    };
    state.profilePage.newPostText = '';
    state.profilePage.postData.push(newPostMessage);
    rerenderEntireState();
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    // state.profilePage.postData.push(newText);
    rerenderEntireState();
}
export const subscribe = (observer: () => void) => {
    rerenderEntireState = observer;
}

