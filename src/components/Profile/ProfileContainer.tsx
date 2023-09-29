import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { AppRootStateType } from "redux/redux-store";
import {
  getProfileStatusThunkCreator,
  profileThunkCreator,
  ProfileType,
  savePhoto,
  setUserProfile,
  updateStatus,
} from "redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import Login from "../Login/Login";
import { withAuthRedirect } from "hoc/withAuthRedirect";

type MapStatePropsType = {
  profile: ProfileType | null;
  status: string;
  authorisedUserId: number | null;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
  profileThunkCreator: (userId: string) => void;
  getProfileStatusThunkCreator: (userId: string) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
};
type PathParamsType = {
  userId: string;
};
export type OwnPropsType = MapStatePropsType & MapDispatchPropsType;

export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<ProfilePropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = String(this.props.authorisedUserId);
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.profileThunkCreator(userId);
    this.props.getProfileStatusThunkCreator(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    if (!this.props.authorisedUserId && !this.props.match.params.userId) {
      return <Login />;
    }
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          savePhoto={this.props.savePhoto}
          setUserProfile={this.props.setUserProfile}
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
  status: state.profileReducer.status,
  authorisedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose<React.FC>(
  connect(mapStateToProps, {
    savePhoto,
    setUserProfile,
    profileThunkCreator,
    getProfileStatusThunkCreator,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
