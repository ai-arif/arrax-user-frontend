"use client";

import Loader from "@/components/ui/Loader";
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
    return <Loader />;
  }

  // Merge user data prioritizing otherUser
  const user = otherUser || loggedInUser;

  return (
    <>
      {/* Profile info section */}
      <DashboardProfileHeader
        image={user?.image}
        fullName={user?.fullName}
        userId={user?.userId}
        referredBy={user?.referredBy}
        walletAddress={user?.walletAddress}
        joiningDate={user?.createdAt}
        referLink={`${process.env.FRONTEND_URL}/login?ref=${user?.userId}`}
      />

      {/* Income Section */}
      <DashboardProfileIncome income={user?.income} />

      {/* Stats Section */}
      <DashboardProfileStats
        totalTeam={user?.totalTeam}
        activeTeam={user?.activeTeam}
        // TODO: checking
        directReferrals={user?.directReferrals?.length}
      />

      {/* <TeamStats /> */}

      {/* <HexagonTrophy /> */}

      <ArraxPrograms />
    </>
  );
};

export default DashboardOverview;
