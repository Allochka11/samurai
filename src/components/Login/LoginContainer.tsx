import React from "react";
import {Login} from "./Login";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {loginUserThunkCreator} from "../../redux/auth-reducer";

type LoginContainerType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    email: string | null
    password: string | null
    rememberMe: boolean
    isAuth: boolean
}

type MapDispatchPropsType = {
    loginUserThunkCreator: (email: string, password: string, rememberMe: boolean) => void

}


class LoginContainer extends React.Component<LoginContainerType> {
    render() {
        return (
            <div>
                <Login
                    loginUserThunkCreator={this.props.loginUserThunkCreator}
                    isAuth={this.props.isAuth}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    email: state.auth.email,
    password: state.auth.password,
    rememberMe: state.auth.rememberMe,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {loginUserThunkCreator})(LoginContainer)