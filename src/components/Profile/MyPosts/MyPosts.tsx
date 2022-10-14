import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsPropsTypes} from "./MyPostsContainer";


function MyPosts(props: PostsPropsTypes) {

    let postsElements = props.postData.map((el) => <Post key={el.id} id={el.id} message={el.message}
                                                         likesCount={el.likesCount}/>)

    const onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    };
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
        // props.updateNewPostText(newText)
        // props.dispatch(onPostChangeActionCreator(newText));

    }
    // value={props.newPostText}
    return (
        <div className={s.posts}>
            <div className={s.posts__container}>
                <div><textarea name="post" onChange={onPostChange}
                               placeholder={'Write your message...'}
                               value={props.newPostText}></textarea></div>
                <div>
                    <button onClick={onAddPost}>Send</button>
                </div>
                <h3>Posts:</h3>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;