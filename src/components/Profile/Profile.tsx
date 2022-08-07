import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
// type ProfilePropsType = {
//     userName: string,
//     avatarUrl: string,
//     profileHeaderImg: string
// }


function Profile() {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ];

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    )
}

export default Profile;