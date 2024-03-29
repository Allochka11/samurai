import React from 'react';
import s from './Post.module.css'
import {PostDataPropsType} from "../../../../redux/profile-reducer";


function Post(props: PostDataPropsType) {
    // console.log(props, 'Post')

    return (
        <div className={s.posts__items} key={props.id}>
            <div className={s.post__text}>
                <img
                    src="https://www.passion.ru/thumb/670x0/filters:quality(75)/imgs/2017/05/12/14/785267/920526968b569ff72f8ac37ca09f5296dcb6f58c.jpg"
                    alt="" className={s.posts__img}/>
                <div className={s.text}>{props.message}</div>
            </div>

            {/*<div><span>like {props.likesCount}</span></div>*/}
        </div>
    )
}

export default Post;