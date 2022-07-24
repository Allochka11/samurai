import React from 'react';
import Post from "./Post";

type MyPostsPropsType = {
    // userName: string,
    // avatarUrl: string,
    // profileHeaderImg: string
}

function MyPosts(props: MyPostsPropsType) {

    return (
            <div className="posts">
                <div className="posts__container">
                    <textarea name="post" id="" placeholder={'Write your message...'}></textarea>
                    <h3>Posts:</h3>
                    <Post message={"Hi, how are you?"} likeCount={15}/>
                    <Post message ={"It's my first post"} likeCount={20}/>
                </div>
            </div>
    )
}

export default MyPosts;