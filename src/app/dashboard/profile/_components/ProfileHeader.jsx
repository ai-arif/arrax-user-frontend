import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import toast from "react-hot-toast";
import { FiCopy } from "react-icons/fi";
import EditProfile from "./EditProfile";

const ProfileHeader = ({
  image,
  fullName,
  userId,
  walletAddress,
  referredBy,
  joiningDate,
  isOwner,
  referLink,
}) => {
  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url).then(
      () => {
        toast.success("Link copied!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      },
    );
  };

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
        {/* Referral link section */}
        <div className="mt-4 space-y-2 text-sm text-zinc-300">
          <p className="font-semibold text-white">Your Referral Link:</p>
          <div className="flex items-center justify-center gap-2">
            <Input type="text" value={referLink} readOnly className="w-fit" />
            <Button
              onClick={handleCopyUrl}
              className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700"
              variant="outline"
              size="sm"
            >
              <FiCopy className="text-white" />
              Copy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
