import React from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initializeAppThunkCreator} from "./redux/appReducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapDispatchToPropsType = {
    initializeAppThunkCreator: () => void
}

type MapStateToProps = {
    initialized: boolean
}

type AppType = MapStateToProps & MapDispatchToPropsType


class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeAppThunkCreator();
        console.log(this.props.initialized)
    }


    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (
            <div className={s.wrapper}>
                <div className={s.wrapper__container}>
                    <div className={s.content}>
                        <HeaderContainer/>
                        <div className={s.content__container}>

                            <Navbar/>
                            <div className={s.content__right}>
                                <Switch>
                                    <Route path="/dialogs"
                                           render={() => <DialogsContainer/>
                                           }/>
                                    <Route path="/profile/:userId?"
                                           render={() => <ProfileContainer/>
                                           }/>
                                    <Route path="/users"
                                           render={() => <UsersContainer/>}/>
                                    <Route path="/login"
                                           render={() => <Login/>}/>

                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.appReducer.initialized
})

export default compose<React.FC>(withRouter, connect(mapStateToProps, {initializeAppThunkCreator}))(App);
