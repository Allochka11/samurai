import React from 'react';
import s from './App.module.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__container}>
                <div className={s.content}>
                    <Header
                        headerLogo="https://w7.pngwing.com/pngs/619/196/png-transparent-dog-logo-minimalism-graphic-design-dog-animals-text-trademark.png"
                    />
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

                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
