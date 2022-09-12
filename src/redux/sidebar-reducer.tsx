import {ActionsTypes, SidebarPagePropsType} from "./store";

let initialState = {
    friends: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Ivan'},
    ]
}
export const sidebarReducer = (state: SidebarPagePropsType = initialState, action: ActionsTypes) => {
    switch (action.type) {

        default:
            return state
    }
}