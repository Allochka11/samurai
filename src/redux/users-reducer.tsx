import {ActionsTypes} from "./store";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


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
    isFetching: boolean
    followingInProgress: []
}

let initialState: UsersPagePropsType = {
    users: [],
    totalUsersCount: 100,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            } as UsersPagePropsType


            // return {
            //     ...state,
            //     followingInProgress: action.isInProgress
            //         ? [...state.followingInProgress, action.userId]
            //         : state.followingInProgress.filter(userId => userId !== action.userId)
            // } as UsersPagePropsType
        }

        default:
            return state;
    }
}

export let follow = (userId: number) => ({type: FOLLOW, userId}) as const;
export let unfollow = (userId: number) => ({type: UNFOLLOW, userId}) as const;
export let setUsers = (users: UsersPropsType[]) => ({type: SET_USERS, users}) as const;
export let setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const;
export let setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
}) as const;

export let toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
}) as const;

export let toggleIsFollowingProgressAC = (isInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isInProgress, userId
}) as const;

