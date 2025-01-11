import React from "react";
import { FaUserFriends, FaUsers, FaUserShield } from "react-icons/fa";
import { HiMiniArrowUp } from "react-icons/hi2";

const TeamStats = ({ totalPartners, totalTeam, activeTeam }) => {
  return (
    <div className="dashboard-bottom-spacing">
      {/* Title */}
      <h2 className="pb-3 text-lg font-semibold text-zinc-200 md:pb-4 md:text-xl">
        Team & Partners Stats
      </h2>

      {/* Information */}
      <div className="grid grid-cols-3 gap-3 md:gap-6">
        <div className="space-y-1.5 rounded-lg border border-purple-600 p-3 text-center shadow-md shadow-purple-600 md:space-y-2.5 md:p-5">
          <h6 className="flex items-center justify-center gap-1 whitespace-nowrap text-base font-semibold md:text-lg">
            <FaUserFriends /> Partner
          </h6>
          <p className="text-xl font-bold text-arx-primary md:text-2xl">
            {totalPartners}
          </p>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center justify-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>{0}</span>
          </div>
        </div>

        <div className="space-y-1.5 whitespace-nowrap rounded-lg border border-purple-600 p-3 text-center shadow-md shadow-purple-600 md:space-y-2.5 md:p-5">
          <h6 className="flex items-center justify-center gap-1 text-base font-semibold md:text-lg">
            <FaUsers /> Team
          </h6>
          <p className="text-xl font-bold text-arx-primary md:text-2xl">
            {totalTeam}
          </p>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center justify-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>{0}</span>
          </div>
        </div>

        <div className="space-y-1.5 whitespace-nowrap rounded-lg border border-purple-600 p-3 text-center shadow-md shadow-purple-600 md:space-y-2.5 md:p-5">
          <h6 className="flex items-center justify-center gap-1 text-base font-semibold md:text-lg">
            <FaUserShield /> Active
          </h6>
          <p className="text-xl font-bold text-arx-primary md:text-2xl">
            {activeTeam}
          </p>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center justify-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>{0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
