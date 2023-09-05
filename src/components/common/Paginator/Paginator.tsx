import React from "react";
import s from "./Paginator.module.css";

type UsersType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onClickPageHandler: (p: number) => void;
};

export const Paginator = ({ currentPage, totalUsersCount, pageSize, onClickPageHandler, ...props }: UsersType) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={currentPage === p ? s.selectedPage : s.pagination}
            onClick={() => onClickPageHandler(p)}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
