import {legacy_createStore as createStore} from 'redux';
import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {ReducersPropsType, StoreType} from "./store";

// type ReducersType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer,
    sidebarReducer: sidebarReducer
});


let store = createStore(reducers) as StoreType;
export default store;
