import React from 'react';

function Profile() {

    return (
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
    )
}

export default Profile;