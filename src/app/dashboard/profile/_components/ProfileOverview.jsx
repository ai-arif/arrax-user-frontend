"use client";

import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileIncome from "./ProfileIncome";
import ProfileStats from "./ProfileStats";

const ProfileOverview = () => {
  const { loggedInUser, loading } = useContext(AuthContext);

  if (loading) {
    return <p className="py-10 text-center text-2xl font-medium">Loading...</p>;
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
        // TODO: Add dynamic data
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
        // TODO: checking
        directReferrals={loggedInUser?.directReferrals?.length}
      />
    </>
  );
};

export default ProfileOverview;
