"use client";

import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ArraxPrograms from "./ArraxPrograms";
import DashboardProfileHeader from "./DashboardProfileHeader";
import DashboardProfileIncome from "./DashboardProfileIncome";
import DashboardProfileStats from "./DashboardProfileStats";
import HexagonTrophy from "./HexagonTrophy";
import TeamStats from "./TeamStats";

const DashboardOverview = () => {
  const { loggedInUser, otherUser, loading } = useContext(AuthContext);

  if (loading) {
    return <p className="py-10 text-center text-2xl font-medium">Loading...</p>;
  }

  return (
    <>
      {/* Profile info section */}
      <DashboardProfileHeader
        image={otherUser?.image}
        fullName={otherUser?.fullName || loggedInUser?.fullName}
        userId={otherUser?.userId || loggedInUser?.userId}
        referredBy={otherUser?.referredBy || loggedInUser?.referredBy}
        walletAddress={otherUser?.walletAddress || loggedInUser?.walletAddress}
        joiningDate={otherUser?.createdAt || loggedInUser?.createdAt}
        referLink={`${process.env.FRONTEND_URL}/login?ref=${otherUser?.userId || loggedInUser?.userId}`}
      />

      {/* Income Section */}
      <DashboardProfileIncome
        income={otherUser?.income || loggedInUser?.income}
      />

      {/* Stats Section */}
      <DashboardProfileStats
        totalTeam={otherUser?.totalTeam || loggedInUser?.totalTeam}
        activeTeam={otherUser?.activeTeam || loggedInUser?.activeTeam}
        // TODO: checking
        directReferrals={
          otherUser?.directReferrals?.length ||
          loggedInUser?.directReferrals?.length
        }
      />

      {/* <TeamStats /> */}

      {/* <HexagonTrophy /> */}

      <ArraxPrograms />
    </>
  );
};

export default DashboardOverview;
