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

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      {/* Title */}
      <h2 className="pb-3 text-lg font-semibold text-gray-200 md:pb-4 md:text-xl">
        Transaction History
      </h2>

      {/* Table */}
      <Table className="rounded-lg bg-purple-600 shadow-lg shadow-purple-600">
        <TableHeader>
          <TableRow className="border-gray-500 hover:bg-transparent">
            <TableHead className="text-nowrap text-center text-gray-300">
              S.N
            </TableHead>
            <TableHead className="text-nowrap text-center text-gray-300">
              From
            </TableHead>
            <TableHead className="text-nowrap text-center text-gray-300">
              To
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
          {transactions?.map((transaction, index) => (
            <TableRow
              key={transaction._id}
              className="border-gray-500 text-center hover:bg-transparent"
            >
              <TableCell>{index + 1}</TableCell>

              <TableCell>{transaction.fromId}</TableCell>
              <TableCell>{transaction.receiverId}</TableCell>
              <TableCell>{transaction?.incomeType}</TableCell>
              <TableCell>
                {new Date(transaction.createdAt).toLocaleDateString()}{" "}
                {new Date(transaction.createdAt).toLocaleTimeString()}
              </TableCell>
              <TableCell className="text-right text-orange-400">
                {Number(transaction.amount) / 1e18}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
