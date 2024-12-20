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
  const { loggedInUser, loading } = useContext(AuthContext);

  if (loading) {
    return <p className="py-10 text-center text-2xl font-medium">Loading...</p>;
  }

  return (
    <>
      {/* Profile info section */}
      <DashboardProfileHeader
        image={loggedInUser?.image}
        fullName={loggedInUser?.fullName}
        userId={loggedInUser?.userId}
        referredBy={loggedInUser?.referredBy}
        walletAddress={loggedInUser?.walletAddress}
        joiningDate={loggedInUser?.createdAt}
        referLink={`${process.env.FRONTEND_URL}/login?ref=${loggedInUser?.userId}`}
      />

      {/* Income Section */}
      <DashboardProfileIncome income={loggedInUser?.income} />

      {/* Stats Section */}
      <DashboardProfileStats
        totalTeam={loggedInUser?.totalTeam}
        activeTeam={loggedInUser?.activeTeam}
        // TODO: checking
        directReferrals={loggedInUser?.directReferrals?.length}
      />

      {/* <TeamStats /> */}

      {/* <HexagonTrophy /> */}

      <ArraxPrograms />
    </>
  );
};

export default DashboardOverview;
