import {ActionsTypes} from "./store";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";


type LocationPropsType = {
    city: string
    country: string
}

export type UsersPropsType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationPropsType
}


export type UsersPagePropsType = {
    users: UsersPropsType[]

}

let initialState: UsersPagePropsType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
        //     followed: true,
        //     fullName: 'Alla',
        //     status: 'Lalalla',
        //     location: {city: 'Kyiv', country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
        //     followed: false,
        //     fullName: 'Ann',
        //     status: 'Lalalla',
        //     location: {city: 'Krakow', country: 'Poland'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
        //     followed: true,
        //     fullName: 'Alister',
        //     status: 'Lalalla',
        //     location: {city: 'London', country: 'GB'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
        //     followed: false,
        //     fullName: 'Pol',
        //     status: 'Lalalla',
        //     location: {city: 'Berlin', country: 'Germany'}
        // },
        // {
        //     id: 5,
        //     photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
        //     followed: true,
        //     fullName: 'Alla',
        //     status: 'Lalalla',
        //     location: {city: 'Cietl', country: 'Australia'}
        // },
    ]

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

