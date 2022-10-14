import {legacy_createStore as createStore} from 'redux';
import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let rootReducer = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer,
    sidebarReducer: sidebarReducer
});


let store = createStore(rootReducer);
// window.store = store

export type AppStoreType = typeof store;
export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;
