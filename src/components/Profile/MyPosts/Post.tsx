import React from 'react';

type PostPropsType = {
    message: string,
    // avatarUrl: string,
    // profileHeaderImg: string
}

function Post(props: PostPropsType) {

    console.log(props)

    return (
        <div className="posts__items">
            <img src="https://www.passion.ru/thumb/670x0/filters:quality(75)/imgs/2017/05/12/14/785267/920526968b569ff72f8ac37ca09f5296dcb6f58c.jpg" alt="" className="posts__img"/>
            {props.message}
            <div><span>like</span></div>
        </div>
    )
}

export default Post;