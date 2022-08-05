import React from 'react';
import {Link} from "react-router-dom";
import s from './Navbar.module.css'
// type NavbarPropsType = {
//     // profileUrl: string,
//     // massagesUrl: string,
//     // newsUrl: string,
//     // musicUrl: string,
//     // settingsUrl: string
// }

function Navbar() {

    return (
        <div className={s.navbar}>
            <div className={s.navbar__container}>
                <ul className={s.navbar__item}>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/dialogs">Dialogs</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;