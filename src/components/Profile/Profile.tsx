import React, {useMemo} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "redux/profile-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "redux/redux-store";
import {LoginReduxForm} from "../../components/Login/LoginForm";

export type ProfilePropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void
    status: string
    updateStatus: (status: string) => void
}

function Profile1(props: ProfilePropsType) {
    let isAuth = useSelector<AppRootStateType>((state) => state.auth.isAuth)


    return (
        <div className={s.profile}>

            {isAuth ?
                <>
                    <ProfileInfo {...props}/>
                    <MyPostsContainer/>
                </>
                : <LoginReduxForm/>
            }


        </div>
    )
}

export default Profile1;

export const Profile = React.memo(Profile1)