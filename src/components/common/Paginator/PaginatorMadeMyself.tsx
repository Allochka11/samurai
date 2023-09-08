import React, { useState } from "react";
import s from "./Paginator.module.css";
import { buttonClasses, Pagination } from "@mui/material";

type UsersType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onClickPageHandler: (p: number) => void;
  portionSize: number;
};

export const PaginatorMadeMyself = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onClickPageHandler,
  portionSize = 10,
  ...props
}: UsersType) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / 3); //1 page with 1 portion of 10 items
  let [portionNumber, setPortionNumber] = useState(1);

  // let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  // let rightPortionNumber = portionNumber * portionSize;

  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = Math.min(portionNumber * portionSize, pagesCount);

  console.log(portionNumber);

  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          left
        </button>
      )}
      {pages
        .filter((el) => el >= leftPortionNumber && el <= rightPortionNumber)
        .map((p) => {
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
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          right
        </button>
      )}
    </div>
  );
};
