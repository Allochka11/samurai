import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mstp = (state: AppRootStateType): MapStatePropsType => {
    return {isAuth: state.auth.isAuth}
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        // @ts-ignore
        return <Component {...restProps as T}/>
    }

    const ConnectedRedirectComponent = connect(mstp)(RedirectComponent)

    return ConnectedRedirectComponent;
}