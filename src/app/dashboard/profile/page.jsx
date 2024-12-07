"use client";

import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileIncome from "./_components/ProfileIncome";
import ProfileStats from "./_components/ProfileStats";

const ProfilePage = () => {
  const { loggedInUser, loading } = useContext(AuthContext);
  console.log(loggedInUser);

  if (loading) {
    return <p className="py-10 text-center text-2xl font-medium">Loading...</p>;
  }

  return (
    <div>
      {/* Profile Header */}
      <ProfileHeader
        image={loggedInUser?.image}
        fullName={loggedInUser?.fullName}
        userId={loggedInUser?.userId}
        walletAddress={loggedInUser?.walletAddress}
        referredBy={loggedInUser?.referredBy}
        joiningDate={new Date(loggedInUser?.createdAt).toLocaleDateString()}
        isOwner={loading?.isOwner}
      />

      {/* Income Section */}
      <ProfileIncome income={loggedInUser?.income} />

      {/* Stats Section */}
      <ProfileStats
        totalTeam={loggedInUser?.totalTeam}
        activeTeam={loggedInUser?.activeTeam}
        directReferrals={loggedInUser?.directReferrals?.length}
      />
    </div>
  );
};

export default ProfilePage;
