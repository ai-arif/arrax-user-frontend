import React from "react";
import { HiMiniArrowUp } from "react-icons/hi2";

const ProfitStats = ({ sectionTitle, income }) => {
  return (
    <div className="dashboard-bottom-spacing">
      {/* Title */}
      {sectionTitle}

      {/* Information */}
      <div className="space-y-2.5 rounded-lg bg-purple-600 p-4 text-gray-200 shadow-lg shadow-purple-600 md:space-y-3.5 md:p-5">
        <div className="flex items-center justify-between gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Total profit:{" "}
            <span className="text-white">{income?.total}$ USDT</span>
          </h3>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center justify-end text-xs font-medium text-teal-400 md:text-sm">
            <HiMiniArrowUp />
            <span>0$</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Direct profit:{" "}
            <span className="text-white">{income?.directIncome}$ USDT</span>
          </h3>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center text-xs font-medium text-teal-400 md:text-sm">
            <HiMiniArrowUp />
            <span>0$</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Level profit:{" "}
            <span className="text-white">{income?.levelIncome}$ USDT</span>
          </h3>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center text-xs font-medium text-teal-400 md:text-sm">
            <HiMiniArrowUp />
            <span>0$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitStats;
