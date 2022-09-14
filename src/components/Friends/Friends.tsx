import React from "react";
import {FriendPropsType} from "../../redux/store";
import {Friend} from "./Friend/Friend";
import {AppStoreType} from "../../redux/redux-store";


type StateFriendsPropsType = {
    store: AppStoreType
}


export const Friends = (props: StateFriendsPropsType) => {
    let state = props.store.getState().sidebarReducer
    let friends = state.friends.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}/>);
    return (
        <div>
            {friends}
        </div>
    );
};