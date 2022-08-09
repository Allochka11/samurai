import React from "react";
import {FriendPropsType} from "../../../redux/state";


export const Friend = (props: FriendPropsType) => {

    return (
        <div key={props.id}>
            <div>{props.name}</div>

        </div>
    );
};