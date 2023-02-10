import React from 'react';
import s from './Header.module.css'
import user from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    avatar: string | null
}

function Header(props: HeaderPropsType) {
    console.log(props.avatar)

    return (
        <div className={s.header}>
            <div className={s.header__row}>
                <img
                    src={"https://w7.pngwing.com/pngs/619/196/png-transparent-dog-logo-minimalism-graphic-design-dog-animals-text-trademark.png"}
                    alt="" className={s.header__logo}/>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ?
                        <div className={s.loginAndAvatar}>
                            <img className={s.avatar} src={props.avatar ? props.avatar : user} alt=""/>

                            Hi, {props.login}
                        </div>
                        : <NavLink to={'login'} className={s.loginText}>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;