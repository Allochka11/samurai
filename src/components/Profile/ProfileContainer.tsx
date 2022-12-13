import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';


type MapStatePropsType = {
    // profile: ProfileType | null
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    // setUserProfile: (profile: ProfileType) => void,
    setUserProfile: (profile: ProfileType) => void
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


        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + +userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <div>
                <Profile setUserProfile={this.props.setUserProfile} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile
})

export default withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer));