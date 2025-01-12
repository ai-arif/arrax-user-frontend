import { handleCopy } from "@/utils/copy-text";
import { formatAddress } from "@/utils/format-address";
import { formatDateAndTime } from "@/utils/format-date";
import React from "react";
import { PiCopyThin } from "react-icons/pi";

const UserBasicInfo = ({
  fullName,
  userId,
  referredBy,
  walletAddress,
  joiningDate,
}) => {
  return (
    <div className="dashboard-bottom-spacing">
      {/* Title */}
      <h2 className="pb-3 text-lg font-semibold text-zinc-200 md:pb-4 md:text-xl">
        User Basic Info.
      </h2>

      {/* Basic information */}
      <div className="space-y-1.5 rounded-lg border border-purple-600 p-4 shadow-md shadow-purple-600 md:space-y-2.5 md:p-5">
        <p>
          <span className="text-zinc-300">Full Name:</span> {fullName}
        </p>
        <p>
          <span className="text-zinc-300">User ID:</span> {userId}
        </p>
        <p>
          <span className="text-zinc-300">Invited By:</span> {referredBy}
        </p>
        <div className="flex items-center gap-1.5">
          <p>
            <span className="text-zinc-300">Wallet Address:</span>{" "}
            {formatAddress(walletAddress)}
          </p>
          <button
            onClick={() => handleCopy(walletAddress)}
            className="rounded-sm bg-arx-secondary p-1"
          >
            <PiCopyThin />
          </button>
        </div>
        <p>
          <span className="text-zinc-300">Joined on:</span>{" "}
          {formatDateAndTime(joiningDate)}
        </p>
      </div>
    </div>
  );
};

export default UserBasicInfo;
