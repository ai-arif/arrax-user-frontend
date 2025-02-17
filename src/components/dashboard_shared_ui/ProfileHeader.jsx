import EditProfile from "@/app/dashboard/profile/_components/EditProfile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleCopy } from "@/utils/copy-text";
import { formatAddress } from "@/utils/format-address";
import { formatDateAndTime } from "@/utils/format-date";
import React from "react";
import { PiCopyThin } from "react-icons/pi";

const ProfileHeader = ({
  image,
  fullName,
  userId,
  walletAddress,
  referredBy,
  joiningDate,
  referLink,
  isOwner,
}) => {
  return (
    <div className="dashboard-bottom-spacing">
      <div>
        <div className="flex items-center gap-3.5 md:flex-col md:gap-5">
          {/* profile info part */}
          <div>
            <Avatar
              className={`h-[85px] w-[85px] md:h-28 md:w-28 ${image && "border-2 border-arx-primary"}`}
            >
              <AvatarImage src={image || "/images/dashboard/avatar.png"} />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-grow space-y-1 text-xs md:space-y-1.5 md:text-center md:text-sm">
            <p>
              {fullName} ID: {userId}
            </p>
            <p>Invited By: {referredBy}</p>
            <div className="flex items-center gap-1.5 md:justify-center">
              <p>Adds: {formatAddress(walletAddress)}</p>
              <button
                onClick={() => handleCopy(walletAddress)}
                className="rounded-[2px] bg-arx-secondary p-0.5"
              >
                <PiCopyThin />
              </button>
            </div>
            <p>Joined on: {formatDateAndTime(joiningDate)}</p>
          </div>
          {/* Profile edit modal */}
          {isOwner && (
            <div className="self-start md:self-center">
              <EditProfile fullName={fullName} />
            </div>
          )}
        </div>

        {/* Referral link section */}
        <div className="mx-auto mt-4 flex w-full items-center justify-center md:mt-6 md:w-[50%]">
          <Input
            type="text"
            value={referLink}
            readOnly
            className="h-8 rounded-r-none bg-gray-800"
          />
          <Button
            onClick={() => handleCopy(referLink)}
            variant="secondary"
            size="sm"
            className="rounded-l-none bg-arx-secondary"
          >
            <PiCopyThin />
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
