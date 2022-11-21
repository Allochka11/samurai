import {ActionsTypes} from "./store";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";


type LocationPropsType = {
    city: string
    country: string
}
type PhotosType = {
    small: string
    large: string
}

export type UsersPropsType = {
    photos: PhotosType,
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationPropsType
}


export type UsersPagePropsType = {
    users: UsersPropsType[]

}

let initialState: UsersPagePropsType = {
    users: []
}

export const usersReducer = (state: UsersPagePropsType = initialState, action: ActionsTypes): UsersPagePropsType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export let followAC = (userId: number) => ({type: FOLLOW, userId}) as const;
export let unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export let setUsersAC = (users: UsersPropsType[]) => ({type: SET_USERS, users}) as const;

