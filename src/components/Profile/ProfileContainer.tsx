import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    getProfileStatusThunkCreator,
    profileThunkCreator,
    ProfileType,
    setUserProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {compose} from "redux";


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    profileThunkCreator: (userId: string) => void
    getProfileStatusThunkCreator: (userId: string) => void
    updateStatus: (status: string) => void
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
            userId = String(26074)
        }
        this.props.profileThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)
    }


    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} setUserProfile={this.props.setUserProfile}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}


                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status
})

export default compose<React.FC>(
    connect(mapStateToProps,
        {
            setUserProfile, profileThunkCreator,
            getProfileStatusThunkCreator, updateStatus
        }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

// let ProfileContainerRouter = withRouter(withAuthRedirect(ProfileContainer))
// let A = withAuthRedirect(ProfileContainer)

// export default compose<React.Component>(withAuthRedirect(withRouter(connect(mapStateToProps, {
//     setUserProfile,
//     profileThunkCreator
// }))(ProfileContainer)));