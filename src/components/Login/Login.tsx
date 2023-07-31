import React from "react";
import {FormDataType, LoginReduxForm} from "./LoginForm";
import ProfileContainer from "../Profile/ProfileContainer";
import {connect, useSelector} from "react-redux";
import {loginUserThunkCreator} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type LoginType = {
    // loginUserThunkCreator: (email: string, password: string, rememberMe: boolean) => void
    // isAuth: boolean
}

type MapDispatchType = {
    loginUserThunkCreator: (email: string, password: string, rememberMe: boolean) => void

}
const Login = (props: LoginType & MapDispatchType) => {
    let isAuth = useSelector<AppRootStateType>((state) => state.auth.isAuth)
    let onSubmit = (formData: FormDataType) => {
        console.log(formData)
        let {email, password, rememberMe} = formData;
        props.loginUserThunkCreator(email, password, rememberMe)
    }

    return (
        <>
            {isAuth && <ProfileContainer/>}
            {!isAuth && <LoginReduxForm onSubmit={onSubmit}/>}
        </>
    );
};
export default connect(null, {loginUserThunkCreator})(Login)