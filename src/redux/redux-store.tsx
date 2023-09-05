import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { profileReducer } from "./profile-reducer";
import { messageReducer } from "./message-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./appReducer";

let rootReducer = combineReducers({
  profileReducer: profileReducer,
  messageReducer: messageReducer,
  sidebarReducer: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  appReducer: appReducer,
  form: formReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
(window as any).store = store;

export type AppStoreType = typeof store;
export type AppRootStateType = ReturnType<typeof rootReducer>;

export default store;
