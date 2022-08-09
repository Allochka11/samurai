import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {PostDataPropsType} from "../../redux/state";


type ProfilePropsType = {
    postData: PostDataPropsType[]
}

type StateProfilePropsType = {
    state: ProfilePropsType
    addPost: (message: string) => void
}


function Profile(props: StateProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;