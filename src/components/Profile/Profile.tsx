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
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;