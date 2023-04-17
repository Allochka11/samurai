import React from 'react';
import {addPostActionCreator, PostDataPropsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStatePropsType = {
    postData: PostDataPropsType[]
    // newPostText: string

}
type MapDispatchPropsType = {
    // updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void

}

export type PostsPropsTypes = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        postData: state.profileReducer.postData,
        // newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        // updateNewPostText: (text: string) => {
        //     let action = onPostChangeActionCreator(text);
        //     dispatch(action);
        // },
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);