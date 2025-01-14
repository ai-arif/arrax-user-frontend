"use client";

import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";
import { Button } from "@/components/ui/button";
import EmptyUI from "@/components/ui/EmptyUI";
import FailedUI from "@/components/ui/FailedUI";
import Loader from "@/components/ui/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllUsers } from "@/hooks/admin/useAllUsers";
import { formatAddress } from "@/utils/format-address";
import Link from "next/link";
import React, { useState } from "react";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const {
    data = {},
    isLoading,
    isError,
  } = useAllUsers({
    currentPage,
    limit: itemsPerPage,
    search,
  });

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search?.value);
    setCurrentPage(1);
  };

  // Function to handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage?.selected + 1);
  };

  // if (isLoading) return <Loader />;

  if (isError) return <FailedUI />;

  return (
    <div>
      {/* Header & search part */}
      <div className="dashboard-bottom-spacing">
        <div className="rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-4 shadow-lg shadow-purple-600 md:p-6">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:items-center">
            <Search handleSearch={handleSearch} />
            <h2 className="text-xl font-semibold md:text-2xl">All Users</h2>
          </div>
        </div>
      </div>

      {/* Empty message */}
      {data?.users?.length === 0 ? (
        <EmptyUI message="No users found." />
      ) : (
        <>
          {/* Table part */}
          <Table className="rounded-lg bg-gradient-to-r from-purple-600 shadow-lg shadow-purple-600">
            <TableHeader>
              <TableRow className="border-gray-500 hover:bg-transparent">
                <TableHead className="text-nowrap text-center text-gray-300">
                  S.N
                </TableHead>
                <TableHead className="text-nowrap text-center text-gray-300">
                  Name
                </TableHead>
                <TableHead className="text-nowrap text-center text-gray-300">
                  User ID
                </TableHead>
                <TableHead className="text-nowrap text-center text-gray-300">
                  Wallet Address
                </TableHead>
                <TableHead className="text-center text-gray-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.users?.map((user, index) => (
                <TableRow
                  key={user._id}
                  className="border-gray-500 text-center hover:bg-transparent"
                >
                  <TableCell>
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </TableCell>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>{formatAddress(user.walletAddress)}</TableCell>
                  <TableCell>
                    <Button
                      variant="secondary"
                      size="xs"
                      className="bg-purple-600"
                      asChild
                    >
                      <Link
                        href={`/dashboard/admin/manage-users/${user.userId}`}
                      >
                        View
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination part */}
          <Pagination
            currentPage={currentPage}
            totalPages={data?.totalPages}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ManageUsers;
