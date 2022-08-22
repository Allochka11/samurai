import React from 'react';
import s from './App.module.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {AppPropsType} from "./redux/state";


function App(props: AppPropsType) {

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
                            <Routes>
                                <Route path="/dialogs/*"
                                       element={<Dialogs state={props.state.messagesPage}
                                       />}/>
                                <Route path="/profile"
                                       element={<Profile profilePage={props.state.profilePage}
                                                         addPost={props.addPost}
                                                         updateNewPostText={props.updateNewPostText}/>}/>
                                <Route path="/friends"
                                       element={<Friends state={props.state.sidebar}/>}/>
                            </Routes>
                            {/*<Dialogs/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
