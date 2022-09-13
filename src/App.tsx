import React from 'react';
import s from './App.module.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";
import {AppStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type PropsType = {
    store: AppStoreType
}

function App(props: PropsType) {

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
                                       element={<DialogsContainer store={props.store}/>

                                       }/>
                                <Route path="/profile"
                                       element={<Profile store={props.store}/>}/>
                                <Route path="/friends"
                                       element={<Friends store={props.store}/>}/>
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
