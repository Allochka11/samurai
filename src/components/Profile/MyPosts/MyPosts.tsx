import React from 'react';
import Post from "./Post/Post";

import s from './MyPosts.module.css'

type MyPostsPropsType = {
    // userName: string,
    // avatarUrl: string,
    // profileHeaderImg: string
}

function MyPosts(props: MyPostsPropsType) {

    return (
        <div className={s.posts}>
            <div className={s.posts__container}>
                <div><textarea name="post" id="" placeholder={'Write your message...'}></textarea></div>
                <div>
                    <button>Send</button>
                </div>


                <h3>Posts:</h3>
                <Post message={"Hi, how are you?"} likeCount={15}/>
                <Post message={"It's my first post"} likeCount={20}/>
            </div>
        </div>
    )
}

export default MyPosts;