/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Pagination(props) {
  const getPages = () => {
    const result = [];
    for (let i = 0; i < props.totalPages; i++) {
      result.push(
        <a
          onClick={() => props.onChange(i + 1)}
          className={props.page === i + 1 ? "active" : ""}
        >
          {i + 1}
        </a>
      );
    }
    return result;
  };

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Page {props.page} of {props.totalPages}:
        </span>
        {getPages()}
        <a href="a">
          <i className="ion-arrow-right-b"></i>
        </a>
      </div>
    </div>
  );
}

export default Pagination;
