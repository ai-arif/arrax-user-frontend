"use client";

import { useUserDetails } from "@/hooks/admin/useAllUsers";
import React from "react";
import ProfitStats from "./ProfitStats";
import PurchasedSlots from "./PurchasedSlots";
import TeamStats from "./TeamStats";
import TransactionHistory from "./TransactionHistory";
import UserBasicInfo from "./UserBasicInfo";

const UserDetails = ({ slug }) => {
  const { data = {}, isLoading, isError } = useUserDetails(slug);
  // console.log(data);

  return (
    <div>
      {/* User basic information */}
      <UserBasicInfo
        fullName={data?.user?.fullName}
        userId={data?.user?.userId}
        walletAddress={data?.user?.walletAddress}
        referredBy={data?.user?.referredBy}
        joiningDate={data?.user?.createdAt}
      />

      {/* Profit stats */}
      <ProfitStats income={data?.user?.income} />

      {/* Team Status */}
      <TeamStats
        totalPartners={data?.user?.totalPartners}
        totalTeam={data?.user?.totalTeam}
        activeTeam={data?.user?.activeTeam}
      />

      {/* Purchased slots */}
      <PurchasedSlots slots={data?.slots} />

      {/* Transaction history */}
      <TransactionHistory />
    </div>
  );
};

export default UserDetails;
