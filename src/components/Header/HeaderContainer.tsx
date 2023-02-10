import React from 'react';
import Header from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setAuthUserDataAC, setUserAvatarAC} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string
    avatar: string
}

type MapDispatchPropsType = {
    setAuthUserDataAC: (id: string, email: string, login: string) => void
    setUserAvatarAC: (avatar: string) => void
}

type MapAllPropsTypes = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<MapAllPropsTypes> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                console.log(response.data.resultCode)
                let {id, email, login} = response.data.data;
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserDataAC(id, email, login);

                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + +id)
                        .then(response => {
                            console.log(response.data.photos.small)
                            this.props.setUserAvatarAC(response.data.photos.small)
                        })
                }

            })
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
export default connect(mapStateToProps, {setAuthUserDataAC, setUserAvatarAC})(HeaderContainer);