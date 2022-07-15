import React from 'react';
import MyPosts from './MyPosts/MyPosts';

type ProfilePropsType = {
    userName: string,
    avatarUrl: string,
    profileHeaderImg: string
}

function Profile(props: ProfilePropsType) {

    return (
        <div className="profile">
            <div className="profile__header">
                <img src={props.profileHeaderImg} alt="avatar header"/>
            </div>
            <div className="profile__main">
                <img src={props.avatarUrl} alt="avatar" className="profile__avatar"/>
                <div className="profile__name">{props.userName}</div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;