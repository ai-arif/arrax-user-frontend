import React from "react";
import { HiMiniArrowUp } from "react-icons/hi2";

const ProfitStats = ({ sectionTitle, income }) => {
  return (
    <div className="dashboard-bottom-spacing">
      {/* Title */}
      {/* <h2 className="pb-3 text-lg font-semibold text-zinc-200 md:pb-4 md:text-xl">
        Profit Stats
      </h2> */}
      {sectionTitle}

      {/* Information */}
      <div className="space-y-2.5 rounded-lg border border-purple-600 p-4 shadow-md shadow-purple-600 md:space-y-3.5 md:p-5">
        <div className="flex items-center justify-between gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Total profit:{" "}
            <span className="text-arx-primary">{income?.total}$ USDT</span>
          </h3>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center justify-end text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>0$</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Direct profit:{" "}
            <span className="text-arx-primary">
              {income?.directIncome}$ USDT
            </span>
          </h3>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>0$</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Level profit:{" "}
            <span className="text-arx-primary">
              {income?.levelIncome}$ USDT
            </span>
          </h3>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>0$</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Slot profit:{" "}
            <span className="text-arx-primary">{income?.slotIncome}$ USDT</span>
          </h3>
          {/* TODO: Add dynamic data */}
          <div className="flex items-center text-xs text-green-500 md:text-sm">
            <HiMiniArrowUp />
            <span>0$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitStats;
