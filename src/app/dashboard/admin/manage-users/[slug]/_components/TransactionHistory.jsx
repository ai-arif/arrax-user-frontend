import { Badge } from "@/components/ui/badge";
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
      <h2 className="pb-3 text-lg font-semibold text-gray-200 md:pb-4 md:text-xl">
        Transaction History
      </h2>

      {/* Table */}
      <Table className="rounded-lg border-purple-600 bg-gradient-to-r from-purple-600 shadow-lg shadow-purple-600">
        <TableHeader>
          <TableRow className="border-gray-600 hover:bg-transparent">
            <TableHead className="text-nowrap text-center text-gray-300">
              S.N
            </TableHead>
            <TableHead className="text-nowrap text-center text-gray-300">
              Transaction. ID
            </TableHead>
            <TableHead className="text-nowrap text-center text-gray-300">
              Status
            </TableHead>
            <TableHead className="text-nowrap text-center text-gray-300">
              Date & Time
            </TableHead>
            <TableHead className="text-nowrap text-right text-gray-300">
              Amount ($)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-gray-600 text-center hover:bg-transparent">
            <TableCell>{1}</TableCell>
            <TableCell>{"dpi24875afdjsf0435999"}</TableCell>
            <TableCell>
              <Badge>{"Paid"}</Badge>
            </TableCell>
            <TableCell>12-10-2025 12:19 PM</TableCell>
            <TableCell className="text-right text-orange-400">{120}</TableCell>
          </TableRow>
          <TableRow className="border-gray-600 text-center hover:bg-transparent">
            <TableCell>{2}</TableCell>
            <TableCell>{"dpi24875afdjsf0435999"}</TableCell>
            <TableCell>
              <Badge variant="destructive">{"Cancel"}</Badge>
            </TableCell>
            <TableCell>12-10-2025 12:19 PM</TableCell>
            <TableCell className="text-right text-orange-400">
              {12021}
            </TableCell>
          </TableRow>
          <TableRow className="border-gray-600 text-center hover:bg-transparent">
            <TableCell>{3}</TableCell>
            <TableCell>{"dpi24875afdjsf0435999"}</TableCell>
            <TableCell>
              <Badge>{"Paid"}</Badge>
            </TableCell>
            <TableCell>12-10-2025 12:19 PM</TableCell>
            <TableCell className="text-right text-orange-400">{12}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
