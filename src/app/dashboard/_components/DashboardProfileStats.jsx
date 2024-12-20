import React from "react";
import { FaUserFriends, FaUsers, FaUserShield } from "react-icons/fa";
import { HiMiniArrowUp } from "react-icons/hi2";

const DashboardProfileStats = ({ totalTeam, activeTeam, directReferrals }) => {
  return (
    <div className="dashboard-bottom-spacing">
      <h2 className="mb-3 text-base text-zinc-200 md:mb-4 md:text-lg">
        Team & Partners
      </h2>

      <div className="grid grid-cols-3 gap-3 md:gap-6">
        <div className="space-y-1.5 rounded-lg border-2 border-purple-600 p-4 text-center shadow-md shadow-purple-600 md:space-y-2.5 md:p-5">
          <h6 className="flex items-center justify-center gap-1.5 text-base font-semibold md:text-lg">
            <FaUserFriends /> Partner
          </h6>
          <p className="text-xl font-bold text-arx-primary md:text-2xl">
            {directReferrals}
          </p>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center justify-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>{2}</span>
          </div>
        </div>

        <div className="space-y-1.5 rounded-lg border-2 border-purple-600 p-4 text-center shadow-md shadow-purple-600 md:space-y-2.5 md:p-5">
          <h6 className="flex items-center justify-center gap-1.5 text-base font-semibold md:text-lg">
            <FaUsers /> Team
          </h6>
          <p className="text-xl font-bold text-arx-primary md:text-2xl">
            {totalTeam}
          </p>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center justify-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>{50}</span>
          </div>
        </div>

        <div className="space-y-1.5 rounded-lg border-2 border-purple-600 p-4 text-center shadow-md shadow-purple-600 md:space-y-2.5 md:p-5">
          <h6 className="flex items-center justify-center gap-1.5 text-base font-semibold md:text-lg">
            <FaUserShield /> Active
          </h6>
          <p className="text-xl font-bold text-arx-primary md:text-2xl">
            {activeTeam}
          </p>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center justify-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>{8}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileStats;
