import React from 'react';

type NavbarPropsType = {
    profileUrl: string,
    massagesUrl: string,
    newsUrl: string,
    musicUrl: string,
    settingsUrl: string
}

function Navbar(props: NavbarPropsType) {

    return (
        <div className="navbar">
            <div className="navbar__container">
                <ul className="navbar__item">
                    <li><a href={props.profileUrl}>Profile</a></li>
                    <li><a href={props.massagesUrl}>Massages</a></li>
                    <li><a href={props.newsUrl}>News</a></li>
                    <li><a href={props.musicUrl}>Music</a></li>
                    <li><a href={props.settingsUrl}>Settings</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;