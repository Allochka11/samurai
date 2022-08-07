import React from 'react';
import Post from "./Post/Post";

import s from './MyPosts.module.css'


export type PostDataPropsType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    postData: PostDataPropsType[]
}

function MyPosts(props: MyPostsPropsType) {


    let postsElements = props.postData.map((el) => <Post key={el.id} id={el.id} message={el.message}
                                                         likesCount={el.likesCount}/>)
    return (
        <div className={s.posts}>
            <div className={s.posts__container}>
                <div><textarea name="post" id="" placeholder={'Write your message...'}></textarea></div>
                <div>
                    <button>Send</button>
                </div>


                <h3>Posts:</h3>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;