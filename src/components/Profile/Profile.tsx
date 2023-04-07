import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void
    status: string
    updateStatus: (status: string) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile;