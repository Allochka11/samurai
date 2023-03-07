import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {profileThunkCreator, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {Redirect} from "react-router-dom";


type MapStatePropsType = {
    // profile: ProfileType | null
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    profileThunkCreator: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
export type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType;


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = String(2)
        }
        this.props.profileThunkCreator(userId)
        // profileAPI.getProfile(+userId)
        //     .then(data => {
        //         this.props.setUserProfile(data)
        //     })
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile setUserProfile={this.props.setUserProfile} profile={this.props.profile}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile,
    isAuth: state.auth.isAuth
})

export default withRouter(connect(mapStateToProps, {setUserProfile, profileThunkCreator})(ProfileContainer));