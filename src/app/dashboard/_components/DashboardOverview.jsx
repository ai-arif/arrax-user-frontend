"use client";

import ProfitStats from "@/components/dashboard_shared_ui/ProfitStats";
import TeamStats from "@/components/dashboard_shared_ui/TeamStats";
import Loader from "@/components/ui/Loader";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ArraxPrograms from "./ArraxPrograms";
import DashboardProfileHeader from "./DashboardProfileHeader";
import HexagonTrophy from "./HexagonTrophy";

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

      {/* Profit stats section */}
      <ProfitStats
        sectionTitle={
          <h2 className="mb-3 text-base text-zinc-200 md:mb-4 md:text-lg">
            Profit
          </h2>
        }
        income={user?.income}
      />

      {/* Team Stats Section */}
      <TeamStats
        totalPartners={user?.totalPartners}
        totalTeam={user?.totalTeam}
        activeTeam={user?.activeTeam}
      />

      {/* <TeamStats /> */}

      {/* <HexagonTrophy /> */}

      <ArraxPrograms />
    </>
  );
};

export default DashboardOverview;
