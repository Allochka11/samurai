import {legacy_createStore as createStore} from 'redux';
import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer,
    sidebarReducer: sidebarReducer
});


let store = createStore(reducers);

export type AppStoreType = typeof store;
export type AppRootStateType = ReturnType<typeof reducers>

export default store;
