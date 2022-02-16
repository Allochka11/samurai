import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="wrapper">
            <Header/>
                <main className="main">
                    <div className="container">
                        <div className="main__row">
                            <Navbar/>
                            <Profile/>
                        </div>
                    </div>
                </main>
            <Footer/>
        </div>
    );
}

export default App;
