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
      <h2 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl">
        Generation
      </h2>

      <Table className="rounded-lg bg-arx-black-4 shadow-lg">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-center text-zinc-300">Level</TableHead>
            <TableHead className="text-center text-zinc-300">Total</TableHead>
            <TableHead className="text-center text-zinc-300">Active</TableHead>
            <TableHead className="text-center text-zinc-300">
              Inactive
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {generations?.levels?.map((level, index) => (
            <TableRow key={index} className="text-center hover:bg-transparent">
              <TableCell>{level?.level}</TableCell>
              <TableCell>{level?.total || 20}</TableCell>
              <TableCell>{level?.active || 20}</TableCell>
              <TableCell>{level?.inactive || 20}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Generation;
