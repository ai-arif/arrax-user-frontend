import clsx from "clsx";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="mt-5">
      <ReactPaginate
        className="flex flex-wrap items-center justify-center gap-3 pb-5 text-sm font-semibold text-zinc-300"
        activeLinkClassName={clsx(
          "bg-purple-600 text-white border-purple-600",
          "hover:bg-purple-800",
        )}
        pageLinkClassName="border rounded px-3 py-1.5 hover:bg-zinc-800"
        previousLinkClassName={clsx(
          "px-3 py-1.5 rounded border",
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-zinc-800",
        )}
        nextLinkClassName={clsx(
          "px-3 py-1.5 rounded border",
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-zinc-800",
        )}
        breakClassName="px-2 py-1"
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={totalPages || 0}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
