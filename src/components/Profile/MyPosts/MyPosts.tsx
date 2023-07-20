import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsPropsTypes} from "./MyPostsContainer";
import {AddPostReduxForm, PostFormDataType} from "./Post/AddPostForm";


function MyPosts(props: PostsPropsTypes) {

    let postsElements = props.postData.map((el) => <Post key={el.id} id={el.id} message={el.message}
                                                         likesCount={el.likesCount}/>)

    let onSubmit = (formData: PostFormDataType) => {
        props.addPost(formData.newPostText);
    }
    return (
        <div className={s.posts}>
            <div className={s.posts__container}>

                <AddPostReduxForm onSubmit={onSubmit}/>
                <h3>Posts:</h3>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;