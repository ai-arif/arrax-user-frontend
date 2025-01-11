"use client";

import { useUserDetails } from "@/hooks/admin/useAllUsers";
import React from "react";
import ProfitStats from "./ProfitStats";
import PurchasedSlots from "./PurchasedSlots";
import PurchaseInformation from "./PurchaseInformation";
import TransactionHistory from "./TransactionHistory";

const UserDetails = ({ slug }) => {
  const { data = {}, isLoading, isError } = useUserDetails(slug);
  console.log(data);

  return (
    <div>
      {/* Profit stats */}
      <ProfitStats income={data?.user?.income} />

      {/* Purchase information */}
      <PurchaseInformation />

      {/* Purchased slots */}
      <PurchasedSlots />

      {/* Transaction history */}
      <TransactionHistory />
    </div>
  );
};

export default UserDetails;
