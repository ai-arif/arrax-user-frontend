"use client";

import ProfitStats from "@/components/dashboard_shared_ui/ProfitStats";
import TeamStats from "@/components/dashboard_shared_ui/TeamStats";
import { useUserDetails } from "@/hooks/admin/useAllUsers";
import React from "react";
import PurchasedSlots from "./PurchasedSlots";
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
      <ProfitStats
        sectionTitle={
          <h2 className="pb-3 text-lg font-semibold text-gray-200 md:pb-4 md:text-xl">
            Profit Stats
          </h2>
        }
        income={data?.user?.income}
      />

      {/* Team Status */}
      <TeamStats
        sectionTitle={
          <h2 className="pb-3 text-lg font-semibold text-gray-200 md:pb-4 md:text-xl">
            Team & Partners Stats
          </h2>
        }
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
