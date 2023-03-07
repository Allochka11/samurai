import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthThunkCreator} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string
    avatar: string
}

type MapDispatchPropsType = {
    getAuthThunkCreator: () => void
}

type MapAllPropsTypes = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<MapAllPropsTypes> {
    componentDidMount() {
        this.props.getAuthThunkCreator();
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            avatar={this.props.avatar}
        />

    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar: state.auth.avatar
})


// @ts-ignore
export default connect(mapStateToProps, {getAuthThunkCreator})(HeaderContainer);