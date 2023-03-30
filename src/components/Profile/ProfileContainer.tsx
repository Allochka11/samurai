import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {profileThunkCreator, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    profile: ProfileType | null

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
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} setUserProfile={this.props.setUserProfile} profile={this.props.profile}

                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile
})

export default compose<React.FC>(
    connect(mapStateToProps, {setUserProfile, profileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

// let ProfileContainerRouter = withRouter(withAuthRedirect(ProfileContainer))
// let A = withAuthRedirect(ProfileContainer)

// export default compose<React.Component>(withAuthRedirect(withRouter(connect(mapStateToProps, {
//     setUserProfile,
//     profileThunkCreator
// }))(ProfileContainer)));