import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator, PostDataPropsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//
//     return (
//
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().profileReducer;
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     };
//
//                     const onPostChange = (text: string) => {
//                         let action = onPostChangeActionCreator(text);
//                         store.dispatch(action);
//                     }
//                     return (
//                         <MyPosts updateNewPostText={onPostChange}
//                                  addPost={addPost}
//                                  postData={state.postData}
//                                  newPostText={state.newPostText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }
//
// export default MyPostsContainer;

type MapStatePropsType = {
    postData: PostDataPropsType[]
    newPostText: string

}
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void

}

export type PostsPropsTypes = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        postData: state.profileReducer.postData,
        newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);