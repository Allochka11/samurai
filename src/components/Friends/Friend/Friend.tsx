import React from "react";
import {FriendPropsType} from "../../../redux/store";


export const Friend = (props: FriendPropsType) => {

    return (
        <div key={props.id}>
            <div>{props.name}</div>

        </div>
    );
};