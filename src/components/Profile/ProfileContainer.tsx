import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void,
}
export type ProfileMapStateDispatchPropsTypes = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileMapStateDispatchPropsTypes> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <Profile profile={this.props.profile} setUserProfile={setUserProfile}/>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);