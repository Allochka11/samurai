import React from "react";
import {UsersMapStateDispatchPropsTypes} from "./UsersContainer";
import s from '../Users/Users.module.css'


export const Users = (props: UsersMapStateDispatchPropsTypes) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
            followed: true,
            fullName: 'Alla',
            status: 'Lalalla',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
            {
                id: 2,
                photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
                followed: false,
                fullName: 'Ann',
                status: 'Lalalla',
                location: {city: 'Krakow', country: 'Poland'}
            },
            {
                id: 3,
                photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
                followed: true,
                fullName: 'Alister',
                status: 'Lalalla',
                location: {city: 'London', country: 'GB'}
            },
            {
                id: 4,
                photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
                followed: false,
                fullName: 'Pol',
                status: 'Lalalla',
                location: {city: 'Berlin', country: 'Germany'}
            },
            {
                id: 5,
                photoUrl: 'https://www.president.gov.ua/storage/j-image-storage/14/45/33/7d316e643ff52bc8c3591c1c005174c2_1574167504_extra_large.jpeg',
                followed: true,
                fullName: 'Alla',
                status: 'Lalalla',
                location: {city: 'Cietl', country: 'Australia'}
            }])
    }


    let a = props.users.map(el => <div key={el.id}>
        <span>
            <div><img src={el.photoUrl} alt="" className={s.userPhoto}/></div>
            <div>
                {el.followed
                    ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(el.id)}>Follow</button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{el.fullName}</div>
                <div>{el.status}</div>
            </span>
            <span>
                <div>{el.location.city}</div>
                <div>{el.location.country}</div>
            </span>
        </span>
    </div>)

    return (
        <div>
            {a}
            Im superUser

        </div>
    );
};