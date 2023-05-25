import React from "react";
import "./pagination.css";
import nextbtn from "./nextbtn.jpg";
import backbtn from "./backbtn.png";

export default function Pagination({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  function btnNextPage() {
    currentPage == pages.length
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage + 1);
    return currentPage;
  }
  function btnBackPage() {
    currentPage == 1
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage - 1);
    return currentPage;
  }

  return (
    <div className="pagination">
      <button id="paginationButton" onClick={btnBackPage}>
        <img src={backbtn} alt="back btn" style={{ width: "20px" }} />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            id="paginationButton"
            className={page == currentPage ? "active" : ""}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button id="paginationButton" onClick={btnNextPage}>
        <img src={nextbtn} alt="next btn" style={{ width: "20px" }} />
      </button>
    </div>
  );
}
