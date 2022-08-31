import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";

import s from './MyPosts.module.css'
import {MyPostsType} from "../../../redux/state";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";


function MyPosts(props: MyPostsType) {

    let postsElements = props.postData.map((el) => <Post key={el.id} id={el.id} message={el.message}
                                                         likesCount={el.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.dispatch(onPostChangeActionCreator(newText));

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