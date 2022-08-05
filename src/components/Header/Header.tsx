import React from 'react';
import s from './Header.module.css'

type HeaderPropsType = {
    headerLogo: string,
}

function Header(props:HeaderPropsType) {

    return (
        <div className={s.header}>
            <div className={s.header__row}>
                <img src={props.headerLogo} alt="" className={s.header__logo}/>
            </div>
        </div>
    )
}

export default Header;