import { AppRootStateType } from "./redux-store";
import { createSelector } from "reselect";

export const getUsers = (state: AppRootStateType) => {
  return state.usersPage.users;
};
export const getTotalItemsCount = (state: AppRootStateType) => {
  return state.usersPage.totalUsersCount;
};
export const getPageSize = (state: AppRootStateType) => {
  return state.usersPage.pageSize;
};
export const getCurrentPage = (state: AppRootStateType) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state: AppRootStateType) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: AppRootStateType) => {
  return state.usersPage.followingInProgress;
};

// export const getUsersSuperSelector = createSelector(()=>{}) //reselect
