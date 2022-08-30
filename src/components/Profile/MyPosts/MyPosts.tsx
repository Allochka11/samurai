import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";

import s from './MyPosts.module.css'
import {AddPostActionType, MyPostsType} from "../../../redux/state";


function MyPosts(props: MyPostsType) {

    let postsElements = props.postData.map((el) => <Post key={el.id} id={el.id} message={el.message}
                                                         likesCount={el.likesCount}/>)

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value});

    }

    return (
        <div className={s.posts}>
            <div className={s.posts__container}>
                <div><textarea name="post" onChange={onPostChange}
                               placeholder={'Write your message...'} value={props.newPostText}></textarea></div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
                <h3>Posts:</h3>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;