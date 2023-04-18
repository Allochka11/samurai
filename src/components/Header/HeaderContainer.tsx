import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthThunkCreator, logoutUserThunkCreator} from "../../redux/auth-reducer";
import {compose} from "redux";

type MapStatePropsType = {
    isAuth: boolean
    login: string
    avatar: string
    logoutUserThunkCreator: () => void
}

type MapDispatchPropsType = {
    getAuthThunkCreator: () => void
    logoutUserThunkCreator: () => void
}

type MapAllPropsTypes = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<MapAllPropsTypes> {
    componentDidMount() {
        this.props.getAuthThunkCreator();
    }

    render() {
        return <Header {...this.props} />

    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar: state.auth.avatar
})


export default compose<React.FC>(
    connect(mapStateToProps, {getAuthThunkCreator, logoutUserThunkCreator}))
(HeaderContainer);