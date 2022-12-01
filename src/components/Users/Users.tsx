import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import {UsersMapStateDispatchPropsTypes} from "./UsersContainer";
import {UsersPropsType} from "../../redux/users-reducer";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPageHandler: (p: number) => void
    users: UsersPropsType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


export const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.pagination}
                             onClick={() => props.onClickPageHandler(p)}>
                        {p}
                    </span>
            })}


        </div>
        {props.users.map((el) => (<div key={el.id}>
                <span>
                    <div><img src={el.photos.small !== null ? el.photos.small : userPhoto} alt=""
                              className={s.userPhoto}/></div>
                    <div>
                        {el.followed
                            ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(el.id)}>Follow</button>
                        }
                    </div>
                </span>
            <span>
                    <span>
                    <div>{el.name}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                    <div>{'el.location.city'}</div>
                    <div>{'el.location.country'}</div>
                </span>
                </span>
        </div>))}
    </div>

}