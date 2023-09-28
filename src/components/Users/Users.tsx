import React from "react";
import { UsersPropsType } from "redux/users-reducer";
import { Paginator } from "components/common/Paginator/Paginator";
import { User } from "components/Users/User";

export type UsersType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onClickPageHandler: (p: number) => void;
  users: UsersPropsType[];
  followingInProgress: [];
  followThunkCreator: (userId: number) => void;
  unfollowThunkCreator: (userId: number) => void;
  portionSize: number;
};

export const Users = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onClickPageHandler,
  portionSize,
  ...props
}: UsersType) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onClickPageHandler={onClickPageHandler}
      />
      {props.users.map((el) => (
        <User
          key={el.id}
          user={el}
          followingInProgress={props.followingInProgress}
          followThunkCreator={props.followThunkCreator}
          unfollowThunkCreator={props.unfollowThunkCreator}
        />
      ))}
    </div>
  );
};
