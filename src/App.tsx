import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// import {eventWrapper} from "@testing-library/user-event/dist/utils";


function App() {
    return (
        <div className="wrapper">
            <div className="wrapper__container">
                <div className="content">
                    <Header
                        headerLogo="https://w7.pngwing.com/pngs/619/196/png-transparent-dog-logo-minimalism-graphic-design-dog-animals-text-trademark.png"
                    />
                    <div className="content__container">

                        <Navbar/>
                        <div className="content__right">
                            <Routes>
                                <Route path="/dialogs" element={<Dialogs/>} />
                                <Route path="/profile" element=
                                    {<Profile
                                        userName={'Vasya Pupkin'}
                                        avatarUrl={'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'}
                                        profileHeaderImg={'https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png'}
                                    />}
                                />
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
