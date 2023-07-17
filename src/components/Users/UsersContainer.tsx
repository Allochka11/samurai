import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followSuccess, followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    toggleIsFollowingProgressAC,
    unfollowSuccess, unfollowThunkCreator,
    UsersPropsType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

type MapStatePropsType = {
    users: UsersPropsType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}
type MapDispatchPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (id: number) => void
    unfollowThunkCreator: (id: number) => void
}
export type UsersMapStateDispatchPropsTypes = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersMapStateDispatchPropsTypes> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onClickPageHandler = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.getUsersThunkCreator(p, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onClickPageHandler={this.onClickPageHandler}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                followThunkCreator={this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
        </>
    }
}

//

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps,
    {
        setCurrentPage,
        toggleIsFollowingProgressAC,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator
    })(UsersContainer)