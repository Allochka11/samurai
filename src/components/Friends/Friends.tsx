import React from "react";
import {FriendPropsType} from "../../App";
import {Friend} from "./Friend/Friend";


type FriendsType = {
    friends: FriendPropsType[]
}

type StateFriendsPropsType = {
    state: FriendsType
}


export const Friends = (props: StateFriendsPropsType) => {
    let friends = props.state.friends.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}/>);
    return (
        <div>
            {friends}

        </div>
    );
};