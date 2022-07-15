import React from 'react';
import MyPosts from "../Profile/MyPosts/MyPosts";

type DialogsPropsType = {
    // userName: string,
    // avatarUrl: string,
    // profileHeaderImg: string
}

const Dialogs = (props:DialogsPropsType) => {

    return (
        <div className="dialogs">
            Диалоги

                {/*<div className="profile__header">*/}
                {/*    <img src={props.profileHeaderImg} alt="avatar header"/>*/}
                {/*</div>*/}
                {/*<div className="profile__main">*/}
                {/*    <img src={props.avatarUrl} alt="avatar" className="profile__avatar"/>*/}
                {/*    <div className="profile__name">{props.userName}</div>*/}
                {/*</div>*/}
                {/*<MyPosts />*/}
        </div>
    )
}

export default Dialogs;