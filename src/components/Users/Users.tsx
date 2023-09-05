import React from "react";
import { UsersPropsType } from "redux/users-reducer";
import { Paginator } from "components/common/Paginator/Paginator";
import { User } from "components/Users/User";

export type UsersType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onClickPageHandler: (p: number) => void;
  users: UsersPropsType[];
  followingInProgress: [];
  followThunkCreator: (userId: number) => void;
  unfollowThunkCreator: (userId: number) => void;
};

export const Users = ({ currentPage, totalUsersCount, pageSize, onClickPageHandler, ...props }: UsersType) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onClickPageHandler={onClickPageHandler}
      />
      {props.users.map((el) => (
        <User
          user={el}
          followingInProgress={props.followingInProgress}
          followThunkCreator={props.followThunkCreator}
          unfollowThunkCreator={props.unfollowThunkCreator}
        />
      ))}
    </div>
  );
};
