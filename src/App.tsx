import React from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {


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

export default App;
