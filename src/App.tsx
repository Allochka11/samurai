import React from 'react';
import s from './App.module.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {
    Routes,
    Route
} from "react-router-dom";
import {Friends} from "./components/Friends/Friends";


export type MessagesPropsType = {
    id: number
    message: string
}

export type DialogsPropsType = {
    id: number
    name: string
}

export type PostDataPropsType = {
    id: number
    message: string
    likesCount: number
}
export type FriendPropsType = {
    id: number
    name: string
}

export type MessagesPagePropsType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
}
export type ProfilePagePropsType = {
    postData: PostDataPropsType[]
}

export type SidebarPagePropsType = {
    friends: FriendPropsType[]
}

export type StatePropsType = {
    messagesPage: MessagesPagePropsType
    profilePage: ProfilePagePropsType
    sidebar: SidebarPagePropsType
}

export type StateType = {
    state: StatePropsType
}


function App(props: StateType) {
    console.log(props.state.sidebar.friends, 'App')
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
                                       element={<Profile state={props.state.profilePage}/>}/>
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
