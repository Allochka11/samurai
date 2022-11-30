import React from "react";
import userPhoto from "../../assets/images/images.png";
import s from "./Users.module.css";
import axios from "axios";
import {UsersMapStateDispatchPropsTypes} from "./UsersContainer";


class Users extends React.Component<UsersMapStateDispatchPropsTypes> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response.data.items);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onClickPageHandler = (p: number) => {
        this.props.setCurrentPage(p);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response.data.items);
                this.props.setUsers(response.data.items);
            })

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : s.pagination}
                                 onClick={() => this.onClickPageHandler(p)}>
                        {p}
                    </span>
                })}


            </div>
            {this.props.users.map((el) => (<div key={el.id}>
                <span>
                    <div><img src={el.photos.small !== null ? el.photos.small : userPhoto} alt=""
                              className={s.userPhoto}/></div>
                    <div>
                        {el.followed
                            ? <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(el.id)}>Follow</button>
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
}

export default Users;