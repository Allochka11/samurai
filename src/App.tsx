import React from 'react';
import s from './App.module.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {AppPropsType, StatePropsType, StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
}

function App(props: PropsType) {
    const state = props.store.getState();


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
                                       element={<Dialogs state={state.messagesPage}
                                       />}/>
                                <Route path="/profile"
                                       element={<Profile profilePage={state.profilePage}
                                                         addPost={props.store.addPost.bind(props.store)}
                                                         updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                                <Route path="/friends"
                                       element={<Friends state={state.sidebar}/>}/>
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
