"use client";

import ArraxPrograms from "@/components/dashboard_shared_ui/ArraxPrograms";
import ProfitStats from "@/components/dashboard_shared_ui/ProfitStats";
import TeamStats from "@/components/dashboard_shared_ui/TeamStats";
import Loader from "@/components/ui/Loader";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ProfileHeader from "./ProfileHeader";

const ProfileOverview = () => {
  const { loggedInUser, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Profile info section */}
      <ProfileHeader
        image={loggedInUser?.image}
        fullName={loggedInUser?.fullName}
        userId={loggedInUser?.userId}
        referredBy={loggedInUser?.referredBy}
        walletAddress={loggedInUser?.walletAddress}
        joiningDate={loggedInUser?.createdAt}
        referLink={`${process.env.FRONTEND_URL}/login?ref=${loggedInUser?.userId}`}
      />

      {/* Profit stats section */}
      <ProfitStats
        sectionTitle={
          <h2 className="mb-3 text-base text-zinc-200 md:mb-4 md:text-lg">
            Profit
          </h2>
        }
        income={loggedInUser?.income}
      />

      {/* Team Stats Section */}
      <TeamStats
        sectionTitle={
          <h2 className="mb-3 text-base text-zinc-200 md:mb-4 md:text-lg">
            Team & Partners Stats
          </h2>
        }
        totalPartners={loggedInUser?.totalPartners}
        totalTeam={loggedInUser?.totalTeam}
        activeTeam={loggedInUser?.activeTeam}
      />

      {/* Arrax Programs */}
      <ArraxPrograms />
    </>
  );
};

export default ProfileOverview;
