"use client";

import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ArraxPrograms from "./_components/ArraxPrograms";
import HexagonTrophy from "./_components/HexagonTrophy";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileIncome from "./_components/ProfileIncome";
import ProfileStats from "./_components/ProfileStats";
import TeamStats from "./_components/TeamStats";

const DashboardHomePage = () => {
  const { loggedInUser, loading } = useContext(AuthContext);

  if (loading) {
    return <p className="py-10 text-center text-2xl font-medium">Loading...</p>;
  }

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-7.5 2xl:space-y-10">
      {/* Profile Header */}
      <ProfileHeader
        image={loggedInUser?.image}
        fullName={loggedInUser?.fullName}
        userId={loggedInUser?.userId}
        walletAddress={loggedInUser?.walletAddress}
        referredBy={loggedInUser?.referredBy}
        joiningDate={loggedInUser?.createdAt}
        isOwner={loading?.isOwner}
        // TODO: removed it just for testing
        referLink={
          loggedInUser?.referLink || "https://arrax.space/login?ref=12"
        }
      />

      {/* Income Section */}
      <ProfileIncome income={loggedInUser?.income} />

      {/* Stats Section */}
      <ProfileStats
        totalTeam={loggedInUser?.totalTeam}
        activeTeam={loggedInUser?.activeTeam}
        directReferrals={loggedInUser?.directReferrals?.length}
      />
      {/* team stats */}
      <TeamStats />
      {/* <HexagonTrophy /> */}
      <ArraxPrograms />
    </div>
  );
};

export default DashboardHomePage;
