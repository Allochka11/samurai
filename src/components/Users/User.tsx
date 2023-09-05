import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { UsersPropsType } from "redux/users-reducer";

type LocationPropsType = {
  city: string;
  country: string;
};
type PhotosType = {
  small: string;
  large: string;
};

type UserType = {
  followingInProgress: [];
  followThunkCreator: (userId: number) => void;
  unfollowThunkCreator: (userId: number) => void;
  user: UsersPropsType;
};

export const User = ({ user, followThunkCreator, unfollowThunkCreator, followingInProgress }: UserType) => {
  return (
    <div>
      <div key={user.id}>
        <span>
          <div>
            <NavLink to={"/profile/" + user.id} key={user.id}>
              <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" className={s.userPhoto} />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((idSome) => idSome === user.id)}
                onClick={() => {
                  unfollowThunkCreator(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  followThunkCreator(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"el.location.city"}</div>
            <div>{"el.location.country"}</div>
          </span>
        </span>
      </div>
    </div>
  );
};
