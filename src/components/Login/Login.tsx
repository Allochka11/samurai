import React from "react";
import {FormDataType, LoginReduxForm} from "./LoginForm";
import ProfileContainer from "../Profile/ProfileContainer";

type LoginType = {
    loginUserThunkCreator: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
export const Login = (props: LoginType) => {

    let onSubmit = (formData: FormDataType) => {

        let {login, password, rememberMe} = formData;
        props.loginUserThunkCreator(login, password, rememberMe)

    }

    return (
        <div>
            {props.isAuth && <ProfileContainer/>}
            {!props.isAuth && <LoginReduxForm onSubmit={onSubmit}/>}
            {/*<LoginReduxForm onSubmit={onSubmit}/>*/}
        </div>
    );
};