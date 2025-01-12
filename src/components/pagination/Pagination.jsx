import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="mt-5">
      <ReactPaginate
        className="flex flex-wrap items-center justify-center gap-3 pb-5 text-center text-sm font-semibold text-slate-300"
        activeClassName="bg-purple-600 text-white border border-purple-600"
        previousClassName={`px-3 py-1.5 rounded border ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"}`}
        nextClassName={`rounded border ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"}`}
        disabledClassName="cursor-not-allowed opacity-50"
        pageClassName="border rounded "
        pageLinkClassName="block px-3 py-1.5 hover:bg-purple-600 hover:border-purple-600 hover:text-white hover:border-purple-600 transition-all text-center w-full"
        nextLinkClassName="block px-3 py-1.5 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all text-center w-full"
        breakClassName="px-2 py-1"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={totalPages || 0}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
