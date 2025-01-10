"use client";

import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatAddress } from "@/utils/format-address";
import Link from "next/link";
import React, { useState } from "react";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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

  // useEffect(() => {
  //   let query = {
  //     currentPage,
  //     limit: itemsPerPage,
  //     search,
  //   };

  //   fetchUsers(query)

  // }, [ search, currentPage, itemsPerPage]);

  return (
    <div>
      {/* Header & search part */}
      <div className="dashboard-bottom-spacing">
        <div className="rounded-lg bg-arx-black-4 p-4 shadow-lg md:p-6">
          <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row md:items-center">
            <Search handleSearch={handleSearch} />
            <h2 className="text-lg font-semibold md:text-xl">All Users</h2>
          </div>
        </div>
      </div>
      {/* Table part */}
      <Table className="rounded-lg bg-arx-black-4 shadow-lg">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-nowrap text-center text-zinc-300">
              S.N
            </TableHead>
            <TableHead className="text-nowrap text-center text-zinc-300">
              Name
            </TableHead>
            <TableHead className="text-nowrap text-center text-zinc-300">
              ID
            </TableHead>
            <TableHead className="text-nowrap text-center text-zinc-300">
              Wallet Address
            </TableHead>
            <TableHead className="text-center text-zinc-300">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-center hover:bg-transparent">
            <TableCell>{1}</TableCell>
            <TableCell>{"Atikur Rahman"}</TableCell>
            <TableCell>{7}</TableCell>
            <TableCell>{formatAddress("asdagsfdgsaasdasdfasf")}</TableCell>
            <TableCell>
              <Button variant="secondary" size="xs" asChild>
                <Link href={`/dashboard/manage-users/${1}`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="text-center hover:bg-transparent">
            <TableCell>{2}</TableCell>
            <TableCell>{"Atikur Rahman"}</TableCell>
            <TableCell>{7}</TableCell>
            <TableCell>{formatAddress("asdagsfdgsaasdasdfasf")}</TableCell>
            <TableCell>
              <Button variant="secondary" size="xs" asChild>
                <Link href={`/dashboard/manage-users/${1}`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="text-center hover:bg-transparent">
            <TableCell>{3}</TableCell>
            <TableCell>{"Atikur Rahman"}</TableCell>
            <TableCell>{7}</TableCell>
            <TableCell>{formatAddress("asdagsfdgsaasdasdfasf")}</TableCell>
            <TableCell>
              <Button variant="secondary" size="xs" asChild>
                <Link href={`/dashboard/manage-users/${1}`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Pagination part */}
      <Pagination
        currentPage={currentPage}
        // totalPages={users?.totalPages}
        totalPages={5}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageUsers;
