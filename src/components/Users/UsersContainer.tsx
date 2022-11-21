import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersPropsType} from "../../redux/users-reducer";
import {Dispatch} from "redux";


type MapStatePropsType = {
    users: UsersPropsType[];
}
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UsersPropsType[]) => void
}
export type UsersMapStateDispatchPropsTypes = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersPropsType[]) => dispatch(setUsersAC(users))
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Users)