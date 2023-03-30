import {Redirect} from "react-router-dom";
import React, {FC} from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mstp = (state: AppRootStateType): MapStatePropsType => {
    return {isAuth: state.auth.isAuth}
}

export function withAuthRedirect(Component: FC) {

    function RedirectComponent(props: MapStatePropsType) {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>


        return <Component {...restProps}/>
    }

    const ConnectedRedirectComponent = connect(mstp)(RedirectComponent)

    return ConnectedRedirectComponent;
}