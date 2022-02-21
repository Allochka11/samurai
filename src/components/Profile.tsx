import React from 'react';

type ProfilePropsType = {
    userName: string,
    avatarUrl: string,
    profileHeaderImg: string
}

function Profile(props:ProfilePropsType) {

    return (
        <div className="profile">
            <div className="profile__item">
                <div className="profile__header">
                    <img src={props.profileHeaderImg} alt="avatar header"/>
                </div>
                <div className="profile__main">
                    <img src={props.avatarUrl} alt="avatar" className="profile__avatar"/>
                    <div className="profile__name">{props.userName}</div>
                </div>
                <div className="posts">
                    <div className="posts__container">
                        <h3>Posts:</h3>
                        <div className="posts__items">
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                            <div className="posts__item">lflflfl</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;