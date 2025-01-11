"use client";

import { useUserDetails } from "@/hooks/admin/useAllUsers";
import React from "react";
import ProfitStats from "./ProfitStats";
import PurchasedSlots from "./PurchasedSlots";
import PurchaseInformation from "./PurchaseInformation";
import TeamStats from "./TeamStats";
import TransactionHistory from "./TransactionHistory";

const UserDetails = ({ slug }) => {
  const { data = {}, isLoading, isError } = useUserDetails(slug);
  console.log(data);

  return (
    <div>
      {/* Profit stats */}
      <ProfitStats income={data?.user?.income} />

      {/* Team Status */}
      <TeamStats
        totalPartners={data?.user?.totalPartners}
        totalTeam={data?.user?.totalTeam}
        activeTeam={data?.user?.activeTeam}
      />

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
