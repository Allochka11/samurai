import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

// type ProfilePropsType = {
//     userName: string,
//     avatarUrl: string,
//     profileHeaderImg: string
// }



function Profile() {
    return (
        <div className="profile">
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;