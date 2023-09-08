import React from "react";
import s from "./Paginator.module.css";
import { Pagination } from "@mui/material";

type UsersType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onClickPageHandler: (p: number) => void;
};

export const Paginator = ({ currentPage, totalItemsCount, pageSize, onClickPageHandler, ...props }: UsersType) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Pagination
        count={pagesCount}
        page={currentPage}
        onChange={(event, page) => {
          onClickPageHandler(page);
        }}
        variant="outlined"
        color="secondary"
      />
    </div>
  );
};
