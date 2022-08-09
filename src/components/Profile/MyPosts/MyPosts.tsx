import React from 'react';
import Post from "./Post/Post";

import s from './MyPosts.module.css'
import {PostDataPropsType} from "../../../redux/state";


type MyPostsType = {
    postData: PostDataPropsType[]
    addPost: (message: string) => void

}

function MyPosts(props: MyPostsType) {
    // console.log(props, 'MyPosts')


    let postsElements = props.postData.map((el) => <Post key={el.id} id={el.id} message={el.message}
                                                         likesCount={el.likesCount}/>)


    let newElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newElement.current) {
            props.addPost(newElement.current.value)
            newElement.current.value = ''
        }


    };
    return (
        <div className={s.posts}>
            <div className={s.posts__container}>
                <div><textarea name="post" ref={newElement} placeholder={'Write your message...'}></textarea></div>
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