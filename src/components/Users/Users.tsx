import React from "react";
import userPhoto from "../../assets/images/images.png";
import s from "./Users.module.css";
import axios from "axios";
import {UsersMapStateDispatchPropsTypes} from "./UsersContainer";


class Users extends React.Component<UsersMapStateDispatchPropsTypes> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response.data.items);
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        return <div>
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