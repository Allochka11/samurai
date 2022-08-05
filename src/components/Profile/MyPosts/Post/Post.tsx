import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string,
    likeCount: number
    // avatarUrl: string,
    // profileHeaderImg: string
}

function Post(props: PostPropsType) {

    // console.log(props)

    return (
        <div className={s.posts__items}>
            <img src="https://www.passion.ru/thumb/670x0/filters:quality(75)/imgs/2017/05/12/14/785267/920526968b569ff72f8ac37ca09f5296dcb6f58c.jpg" alt="" className={s.posts__img}/>
            {props.message}
            <div><span>like {props.likeCount}</span></div>
        </div>
    )
}

export default Post;