import React from "react";
import { FormDataType, LoginReduxForm } from "./LoginForm";
import ProfileContainer from "../Profile/ProfileContainer";
import { connect } from "react-redux";
import { loginUserThunkCreator } from "redux/auth-reducer";
import { AppRootStateType } from "redux/redux-store";

type MapDispatchType = {
  loginUserThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void;
};
type MapStatePropsType = {
  isAuth: boolean;
  captchaUrl: null | string;
};

const Login = (props: MapDispatchType & MapStatePropsType) => {
  let onSubmit = (formData: FormDataType) => {
    let { email, password, rememberMe, captcha } = formData;
    props.loginUserThunkCreator(email, password, rememberMe, captcha);
  };

  return (
    <>
      {props.isAuth && <ProfileContainer />}
      {!props.isAuth && <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />}
    </>
  );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { loginUserThunkCreator })(Login);
