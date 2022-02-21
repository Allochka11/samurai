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
                    <h3>Posts:</h3>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
    )
}

export default MyPosts;