import React from 'react';

type HeaderPropsType = {
    headerLogo: string,
}

function Header(props:HeaderPropsType) {

    return (
        <div className="header">
            <div className="header__row">
                <img src={props.headerLogo} alt="" className="header__logo"/>
            </div>
        </div>
    )
}

export default Header;