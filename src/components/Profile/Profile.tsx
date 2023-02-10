import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void
}


function Profile(props: ProfilePropsType) {
    // console.log(props)
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} setUserProfile={props.setUserProfile}/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile;