import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {PostDataPropsType} from "../../App";


type ProfilePropsType = {
    postData: PostDataPropsType[]
}

type StateProfilePropsType = {
    state: ProfilePropsType
}


function Profile(props: StateProfilePropsType) {
    console.log(props, 'Profile')

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}/>
        </div>
    )
}

export default Profile;