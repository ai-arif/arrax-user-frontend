import React from "react";
import { BsFillHexagonFill } from "react-icons/bs";
import { FaUserFriends, FaUsers, FaUserShield } from "react-icons/fa";
import { HiMiniArrowUp } from "react-icons/hi2";

const TeamStats = ({ sectionTitle, totalPartners, totalTeam, activeTeam }) => {
  return (
    <div>
      <div className="dashboard-bottom-spacing">
        {/* Title */}
        {sectionTitle}

        {/* Information */}
        {/* Partner */}
        <div className="grid grid-cols-3 gap-3 text-gray-200 md:gap-6">
          <div className="space-y-1.5 whitespace-nowrap rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-3 text-center shadow-lg shadow-purple-600 md:space-y-2.5 md:p-5">
            <h6 className="flex items-center justify-center gap-1 whitespace-nowrap text-base font-semibold md:text-lg">
              <FaUserFriends /> Partner
            </h6>
            <p className="text-xl font-bold text-white md:text-2xl">
              {totalPartners}
            </p>
            {/* TODO: Add dynamic data */}
            <div className="flex items-center justify-between rounded-full bg-gradient-to-r from-purple-500 p-2">
              <div className="flex items-center justify-center text-xs font-medium text-teal-400 md:text-sm">
                <HiMiniArrowUp />
                <span>{0}</span>
              </div>
              <div>
                <BsFillHexagonFill />
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="space-y-1.5 whitespace-nowrap rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-3 text-center shadow-lg shadow-purple-600 md:space-y-2.5 md:p-5">
            <h6 className="flex items-center justify-center gap-1 text-base font-semibold md:text-lg">
              <FaUsers /> Team
            </h6>
            <p className="text-xl font-bold text-white md:text-2xl">
              {totalTeam}
            </p>
            {/* TODO: Add dynamic data */}
            <div className="flex items-center justify-between rounded-full bg-gradient-to-r from-purple-500 p-2">
              <div className="flex items-center justify-center text-xs font-medium text-teal-400 md:text-sm">
                <HiMiniArrowUp />
                <span>{0}</span>
              </div>
              <div>
                <BsFillHexagonFill />
              </div>
            </div>
          </div>

          {/* Active */}
          <div className="space-y-1.5 whitespace-nowrap rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-3 text-center shadow-lg shadow-purple-600 md:space-y-2.5 md:p-5">
            <h6 className="flex items-center justify-center gap-1 text-base font-semibold md:text-lg">
              <FaUserShield /> Active
            </h6>
            <p className="text-xl font-bold text-white md:text-2xl">
              {activeTeam}
            </p>
            {/* TODO: Add dynamic data */}
            <div className="flex items-center justify-between rounded-full bg-gradient-to-r from-purple-500 p-2">
              <div className="flex items-center justify-center text-xs font-medium text-teal-400 md:text-sm">
                <HiMiniArrowUp />
                <span>{0}</span>
              </div>
              <div>
                <BsFillHexagonFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
