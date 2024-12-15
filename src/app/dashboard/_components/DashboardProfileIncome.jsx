import React from "react";
import { IoMdArrowUp } from "react-icons/io";

const DashboardProfileIncome = ({ income }) => {
  return (
    <div className="dashboard-bottom-spacing">
      <h2 className="mb-3 text-base tracking-wide text-zinc-200 md:mb-4 md:text-lg">
        Profit
      </h2>
      <div className="w-full space-y-2.5 rounded-lg border border-arx-primary bg-arx-black-4 p-4 shadow md:w-1/2 md:space-y-3.5 md:p-5">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Total profit:{" "}
            <span className="text-arx-primary">{income?.total}$ USDT</span>
          </h3>
          <div className="flex items-center text-xs text-green-500 md:text-sm">
            <IoMdArrowUp className="inline-block" />
            <span>6$</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Direct profit:{" "}
            <span className="text-arx-primary">
              {income?.directIncome}$ USDT
            </span>
          </h3>
          <div className="flex items-center text-xs text-green-500 md:text-sm">
            <IoMdArrowUp className="inline-block" />
            <span>2$</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-semibold md:text-xl">
            Level profit:{" "}
            <span className="text-arx-primary">
              {income?.levelIncome}$ USDT
            </span>
          </h3>
          <div className="flex items-center text-xs text-green-500 md:text-sm">
            <IoMdArrowUp className="inline-block" />
            <span>4$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileIncome;
