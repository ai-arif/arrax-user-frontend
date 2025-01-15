"use client";

import FailedUI from "@/components/ui/FailedUI";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGenerations } from "@/hooks/useGenerations";
import React from "react";
import GenerationSkeleton from "./GenerationSkeleton";

const Generation = () => {
  const { data: generations = {}, isLoading, isError } = useGenerations();

  if (isLoading) return <GenerationSkeleton />;

  if (isError) return <FailedUI />;

  return (
    <div>
      {/* Header & search part */}
      <h2 className="mb-3 text-lg font-semibold text-gray-100 md:mb-4 md:text-xl">
        Generation
      </h2>

      {/* Table part */}
      <Table className="rounded-lg border-purple-600 bg-gradient-to-r from-purple-600 shadow-lg shadow-purple-600">
        <TableHeader>
          <TableRow className="border-gray-500 hover:bg-transparent">
            <TableHead className="text-center text-gray-300">Level</TableHead>
            <TableHead className="text-center text-gray-300">Total</TableHead>
            <TableHead className="text-center text-gray-300">Active</TableHead>
            <TableHead className="text-center text-gray-300">
              Inactive
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {generations?.levels?.map((level, index) => (
            <TableRow
              key={index}
              className="border-gray-500 text-center hover:bg-transparent"
            >
              <TableCell>{level?.level}</TableCell>
              <TableCell>{level?.count}</TableCell>
              <TableCell>{level?.active}</TableCell>
              <TableCell>{level?.inactive}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Generation;
