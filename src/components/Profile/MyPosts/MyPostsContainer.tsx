import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

const MyPostsContainer = () => {

    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profileReducer;
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    const onPostChange = (text: string) => {
                        let action = onPostChangeActionCreator(text);
                        store.dispatch(action);
                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 postData={state.postData}
                                 newPostText={state.newPostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;