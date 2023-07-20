import React from 'react';
import {Link} from "react-router-dom";
import s from './Navbar.module.css'

function Navbar() {

    return (
        <div className={s.navbar}>
            <div className={s.navbar__container}>
                <Link to="/profile">Profile</Link>
                <Link to="/dialogs">Dialogs</Link>
                <Link to="/users">Users</Link>
            </div>
        </div>
    )
}

export default Navbar;