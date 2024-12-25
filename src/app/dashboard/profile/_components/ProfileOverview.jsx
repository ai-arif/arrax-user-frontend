"use client";

import Loader from "@/components/ui/Loader";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileIncome from "./ProfileIncome";
import ProfileStats from "./ProfileStats";

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

      {/* Income Section */}
      <ProfileIncome income={loggedInUser?.income} />

      {/* Stats Section */}
      <ProfileStats
        totalTeam={loggedInUser?.totalTeam}
        activeTeam={loggedInUser?.activeTeam}
        // TODO: checking
        directReferrals={loggedInUser?.directReferrals?.length}
      />
    </>
  );
};

export default ProfileOverview;
