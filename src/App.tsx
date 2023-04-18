import React, {useEffect} from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


function App() {
    // let isAuth = useSelector<AppRootStateType>((state) => state.auth.isAuth)

    // console.log(isAuth)
    return (
        <div className={s.wrapper}>
            {/*{isAuth ?*/}
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
            : <Preloader/>

            {/*}*/}
        </div>
    );
}

export default App;
