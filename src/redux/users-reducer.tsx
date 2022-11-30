import {ActionsTypes} from "./store";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";


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
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

let initialState: UsersPagePropsType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1
}

export const usersReducer = (state: UsersPagePropsType = initialState, action: ActionsTypes): UsersPagePropsType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state;
    }
}

export let followAC = (userId: number) => ({type: FOLLOW, userId}) as const;
export let unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export let setUsersAC = (users: UsersPropsType[]) => ({type: SET_USERS, users}) as const;
export let setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const;
export let setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
}) as const;

