import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {StateProfilePropsType} from "../../redux/state";

function Profile(props: StateProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData} newPostText={props.profilePage.newPostText}
                     addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;