import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {ProfileStorePropsType, StateProfilePropsType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {AppRootStateType, AppStoreType} from "../../redux/redux-store";

function Profile(props: ProfileStorePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;