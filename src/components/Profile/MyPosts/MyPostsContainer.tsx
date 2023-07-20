import React from 'react';
import {addPostActionCreator, PostDataPropsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStatePropsType = {
    postData: PostDataPropsType[]
}
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

export type PostsPropsTypes = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        postData: state.profileReducer.postData,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);