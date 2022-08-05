import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import s from './ProfileInfo.module.css';

type ProfileInfoType = {}

export const ProfileInfo = (props: ProfileInfoType) => {
    let profiles = {
        userName:'Vasya Pupkin',
        avatarUrl:'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
        profileHeaderImg:'https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png',

    }
    
    return(
        <div>
            <div className={s.profile__header}>
                <img src={profiles.profileHeaderImg} alt={`${s.avatar}+ ${s.header}`}/>
            </div>
            <div className={s.profile__main}>
                <img src={profiles.avatarUrl} alt="avatar" className={s.profile__avatar}/>
                <div className={s.profile__name}>{profiles.userName}</div>
            </div>

        
        </div>
    );
};