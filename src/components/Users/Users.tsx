import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPageHandler: (p: number) => void
    users: UsersPropsType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: []
    toggleIsFollowingProgressAC: (isFollowingProgress: boolean, userId: number) => void
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
                return <span key={p} className={props.currentPage === p ? s.selectedPage : s.pagination}
                             onClick={() => props.onClickPageHandler(p)}>
                        {p}
                    </span>
            })}


        </div>
        {props.users.map((el) => (<div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id} key={el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt=""
                                 className={s.userPhoto}/>
                        </NavLink>

                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.toggleIsFollowingProgressAC(true, el.id)
                                followAPI.setUnfollow(el.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(el.id)
                                        }
                                        props.toggleIsFollowingProgressAC(false, el.id)
                                    })
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.toggleIsFollowingProgressAC(true, el.id)
                                followAPI.setFollow(el.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(el.id)
                                        }
                                        props.toggleIsFollowingProgressAC(false, el.id)
                                    })
                            }
                            }>Follow</button>
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