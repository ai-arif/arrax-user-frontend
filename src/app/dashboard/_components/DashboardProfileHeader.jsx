import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleCopy } from "@/utils/copy-text";
import { formatAddress } from "@/utils/format-address";
import { formatDateAndTime } from "@/utils/format-date";
import React from "react";
import { PiCopyThin } from "react-icons/pi";

const DashboardProfileHeader = ({
  image,
  fullName,
  userId,
  walletAddress,
  referredBy,
  joiningDate,
  referLink,
}) => {
  return (
    <div className="dashboard-bottom-spacing">
      <div className="flex items-center gap-4 md:gap-7">
        {/* profile info part */}
        <div>
          <Avatar className="h-[85px] w-[85px] md:h-28 md:w-28">
            <AvatarImage src={image || "/images/dashboard/avatar.png"} />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-1 text-xs text-zinc-200 md:space-y-1.5 md:text-sm">
          <p>
            {fullName} ID: {userId}
          </p>
          <p>Invited By: {referredBy}</p>
          <div className="flex items-center gap-1.5">
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
      </div>

      {/* Referral link section */}
      <div className="mt-6 flex w-full items-center justify-center md:mt-8 md:w-[50%]">
        <Input
          type="text"
          value={referLink}
          readOnly
          className="h-8 rounded-r-none"
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
  );
};

export default DashboardProfileHeader;
