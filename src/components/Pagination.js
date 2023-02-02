const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  function handleClick(page) {
    let cardDetails = document.querySelectorAll(".card-details");
    let detailsBtn = document.querySelectorAll(".details-btn");
    for (let cardDetail of cardDetails) {
      cardDetail.classList.add("hidden");
    }
    for (let detailsBtns of detailsBtn) {
      detailsBtns.classList.add("hidden");
    }
    setCurrentPage(page);
  }
  return (
    <div className="pagination">
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => handleClick(page)}
            className={page === currentPage ? "active" : ""}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
