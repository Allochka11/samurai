import React from 'react';
import MyPosts from "../Profile/MyPosts/MyPosts";
import {Link, NavLink} from "react-router-dom";
import {Messages} from "./Messages";

type DialogsPropsType = {
    // userName: string,
    // avatarUrl: string,
    // profileHeaderImg: string
}

type DialogItemPropsType = {
    name: string
    id:number

}
type MessagePropsType = {
    messsage: string
    id:number

}
const DialogItem = (props:DialogItemPropsType) => {
    let path = `/dialogs/${props.id}`;
    return  (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props:MessagePropsType) => {
    return  (
        <div>
            <div>{props.messsage}</div>
        </div>
    )
}
const Dialogs = () => {

    return (
        <div className="dialogs">
            <div>
                <DialogItem name={'Alla'} id={1}/>
                <DialogItem name={'Ann'} id={2}/>
                <DialogItem name={'Oll'} id={3}/>
                <DialogItem name={'All'} id={4}/>
                <DialogItem name={'Nick'} id={5}/>
            </div>
            <div>
                <Message messsage={'Hello'} id={1}/>
                <Message messsage={'How'} id={2}/>
                <Message messsage={'Are'} id={3}/>
                <Message messsage={'You?'} id={4}/>
                <Message messsage={'!!!'} id={5}/>
            </div>



                {/*<div className="profile__header">*/}
                {/*    <img src={props.profileHeaderImg} alt="avatar header"/>*/}
                {/*</div>*/}
                {/*<div className="profile__main">*/}
                {/*    <img src={props.avatarUrl} alt="avatar" className="profile__avatar"/>*/}
                {/*    <div className="profile__name">{props.userName}</div>*/}
                {/*</div>*/}
                {/*<MyPosts />*/}
        </div>
    )
}

export default Dialogs;