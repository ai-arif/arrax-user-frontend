"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const TeamPage = () => {
  const [levels, setLevels] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = Cookies.get("arx_user_id");

  useEffect(() => {
    const fetchGenerations = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/users/user/${userId}/generations`,
        );
        setLevels(response.data?.levels);
      } catch (error) {
        setLoading(false);
        console.log(error);
        throw new Error("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchGenerations();
    }
  }, [userId]);

  if (loading) {
    return <p className="py-10 text-center text-2xl font-medium">Loading...</p>;
  }

  return (
    <div>
      <h4 className="py-5 text-lg font-medium">Generation</h4>
      <Table className="bg-arx-black-4">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-zinc-300">Level</TableHead>
            <TableHead className="text-zinc-300">Total</TableHead>
            <TableHead className="text-zinc-300">Active</TableHead>
            <TableHead className="text-zinc-300">Inactive</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {levels?.map((level, index) => (
            <TableRow key={index} className="hover:bg-transparent">
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

export default TeamPage;
