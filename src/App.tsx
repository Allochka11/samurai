import React from 'react';
import s from'./App.module.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// import {eventWrapper} from "@testing-library/user-event/dist/utils";


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
                            <Routes>
                                <Route path="/dialogs/*" element={<Dialogs/>} />
                                <Route path="/profile" element={<Profile/>}/>
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
