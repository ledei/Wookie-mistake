import React from "react";

const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, i) => {
        return (
          <button key={i} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
