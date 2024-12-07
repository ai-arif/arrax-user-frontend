import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import EditProfile from "./EditProfile";

const ProfileHeader = ({
  image,
  fullName,
  userId,
  walletAddress,
  referredBy,
  joiningDate,
  isOwner,
}) => {
  return (
    <div className="dashboard-bottom-spacing">
      <div className="space-y-4 rounded-lg bg-arx-black-4 p-5 text-center shadow-lg md:space-y-5 md:p-6">
        {/* edit profile part*/}
        <div>
          <Avatar className="mx-auto h-16 w-16 md:h-20 md:w-20">
            <AvatarImage src={image || "/images/dashboard/avatar.png"} />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <h1 className="mb-2 text-xl font-bold md:text-2xl">{fullName}</h1>
          {isOwner && <EditProfile fullName={fullName} image={image} />}
        </div>
        {/* profile info part */}
        <div className="text-sm text-zinc-300">
          <p>ID: {userId}</p>
          <p>Invited By: {referredBy}</p>
          <p>Wallet: {walletAddress}</p>
          <p>Joined: {joiningDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
