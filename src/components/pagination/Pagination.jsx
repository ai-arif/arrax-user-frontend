import { cn } from "@/lib/utils";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="mt-5">
      <ReactPaginate
        className="flex flex-wrap items-center justify-center gap-3 pt-2.5 text-sm font-semibold text-zinc-300 md:pt-4"
        activeLinkClassName={cn(
          "bg-purple-600 text-white border-purple-600",
          "hover:!bg-purple-600",
        )}
        pageLinkClassName="border rounded px-3 py-1.5 hover:bg-zinc-800"
        previousLinkClassName={cn(
          "px-3 py-1.5 rounded border",
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-zinc-800",
        )}
        nextLinkClassName={cn(
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
