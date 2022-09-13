import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";

type MyPostContainerType = {
    store: AppStoreType
}

const MyPostsContainer = (props: MyPostContainerType) => {
    let state = props.store.getState().profileReducer;


    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text: string) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }
    // newPostText={props.profilePage.newPostText}
    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 postData={state.postData}
                 newPostText={state.newPostText}
        />
    )
}

export default MyPostsContainer;