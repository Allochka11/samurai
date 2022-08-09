import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    console.log(props, 'DialogItem')
    let path = `/dialogs/${props.id}`;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}