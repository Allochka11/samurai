import React from 'react';
import './App.css';


function App() {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="container">
                    <div className="header__row">
                        <img src ="https://www.pikpng.com/pngl/m/481-4815508_vkontakte-logo-png-vk-png-clipart.png" className="header__logo"></img>
                    </div>
                </div>
            </div>
            <main className="main">
                <div className="container">
                    <div className="main__row">
                        <div className="navbar">
                            <ul>
                                <li><a href="">Profile</a></li>
                                <li><a href="">Massages</a></li>
                                <li><a href="">News</a></li>
                                <li><a href="">Music</a></li>
                                <li><a href="">Settings</a></li>
                            </ul>
                        </div>
                        <div className="main_info">
                            <div>
                                <div className="profile_img">
                                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png" alt=""/>
                                </div>
                                <div className="avatar">
                                    <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt=""/>
                                    <div className="profile_desc">Vasya Pupkin</div>
                                </div>
                                <div className="profile__info">
                                    <div>My Posts</div>
                                    <div>New post</div>
                                    <div>
                                        <div>post1</div>
                                        <div>post2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="footer__text">
                        Footer
                    </div>
                </div>
            </footer>


        </div>
    );
}

export default App;
