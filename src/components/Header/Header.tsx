import React from 'react';
import user from '../../assets/images/user.png'
import {Avatar, Button} from "@mui/material";
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    avatar: string | null
    logoutUserThunkCreator: () => void
}

function Header(props: HeaderPropsType) {
    let handlerLogout = () => {
        props.logoutUserThunkCreator()
    }
    return (
        <>
            <div className={s.header}>

                <div className={s.header__row}>
                    <img
                        src={"https://w7.pngwing.com/pngs/619/196/png-transparent-dog-logo-minimalism-graphic-design-dog-animals-text-trademark.png"}
                        alt="" className={s.header__logo}/>
                    <div className={s.loginBlock}>

                        {props.isAuth
                            ?
                            <div className={s.loginAndAvatar}>

                                <Avatar alt="Remy Sharp" src={props.avatar !== null ? props.avatar : user}
                                        className={s.avatar}/>
                                <Button variant="outlined" style={{color: 'white'}}
                                        onClick={handlerLogout}>Logout</Button>
                            </div>
                            //
                            : <Button variant="outlined" style={{color: 'white'}}
                                      onClick={handlerLogout} href={'login'}> Login
                            </Button>
                            // : <NavLink to={'login'} className={s.loginText}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;