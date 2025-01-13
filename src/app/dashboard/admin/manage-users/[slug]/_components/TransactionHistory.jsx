import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const TransactionHistory = () => {
  return (
    <div>
      {/* Title */}
      <h2 className="pb-3 text-lg font-semibold text-zinc-200 md:pb-4 md:text-xl">
        Transaction History
      </h2>

      {/* Table */}
      <Table className="rounded-lg bg-gradient-to-r from-[#231525] to-[#241d25] shadow-md shadow-purple-600">
        <TableHeader>
          <TableRow className="border-purple-600 hover:bg-transparent">
            <TableHead className="text-nowrap text-center text-zinc-300">
              S.N
            </TableHead>
            <TableHead className="text-nowrap text-center text-zinc-300">
              Transaction. ID
            </TableHead>
            <TableHead className="text-nowrap text-center text-zinc-300">
              Status
            </TableHead>
            <TableHead className="text-nowrap text-center text-zinc-300">
              Date & Time
            </TableHead>
            <TableHead className="text-nowrap text-right text-zinc-300">
              Amount ($)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-purple-600 text-center hover:bg-transparent">
            <TableCell>{1}</TableCell>
            <TableCell>{"dpi24875afdjsf0435999"}</TableCell>
            <TableCell className="text-green-500">{"paid"}</TableCell>
            <TableCell>12-10-2025 12:19 PM</TableCell>
            <TableCell className="text-right text-amber-500">{120}</TableCell>
          </TableRow>
          <TableRow className="border-purple-600 text-center hover:bg-transparent">
            <TableCell>{2}</TableCell>
            <TableCell>{"dpi24875afdjsf0435999"}</TableCell>
            <TableCell className="text-green-500">{"paid"}</TableCell>
            <TableCell>12-10-2025 12:19 PM</TableCell>
            <TableCell className="text-right text-amber-500">{12021}</TableCell>
          </TableRow>
          <TableRow className="border-purple-600 text-center hover:bg-transparent">
            <TableCell>{3}</TableCell>
            <TableCell>{"dpi24875afdjsf0435999"}</TableCell>
            <TableCell className="text-green-500">{"paid"}</TableCell>
            <TableCell>12-10-2025 12:19 PM</TableCell>
            <TableCell className="text-right text-amber-500">{12}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
