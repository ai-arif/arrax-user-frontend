import React from "react";
import { HiMiniArrowUp } from "react-icons/hi2";

// circle chart component
const CircleChart = ({ percentage }) => {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  return (
    <div
      className="relative h-5 w-5 rounded-full"
      style={{
        background: `conic-gradient(#d1d5db ${normalizedPercentage * 3.6}deg, #6b7280 0deg)`,
      }}
    >
      <div className="absolute inset-1 rounded-full"></div>
    </div>
  );
};

const TeamStats = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-5">
      <div className="flex w-full gap-3 md:w-1/2 md:gap-5">
        {/* partners stats */}
        <div className="w-full space-y-2.5 rounded-lg bg-arx-black-4 p-3">
          <p className="text-sm text-zinc-400">Partners</p>
          <p className="text-lg font-bold md:text-xl">29</p>
          <div className="flex justify-between rounded-full bg-[#464747] p-1.5 text-sm font-medium">
            <div className="flex items-center text-zinc-300">
              <HiMiniArrowUp /> 0
            </div>
            <CircleChart percentage={80} />
          </div>
        </div>
        {/* team stats */}
        <div className="w-full space-y-2.5 rounded-lg bg-arx-black-4 p-3">
          <p className="text-sm text-zinc-400">Team</p>
          <p className="text-lg font-bold md:text-xl">1002</p>
          <div className="flex justify-between rounded-full bg-[#464747] p-1.5 text-sm font-medium">
            <div className="flex items-center text-zinc-300">
              <HiMiniArrowUp /> 0
            </div>
            <CircleChart percentage={90} />
          </div>
        </div>
        {/* partners stats */}
        {/* <div className="w-full space-y-2.5 rounded-lg bg-arx-black-4 p-3">
          <p className="text-sm text-zinc-400">Ratio</p>
          <p className="text-lg font-bold md:text-xl">915%</p>
          <div className="flex justify-between rounded-full bg-[#464747] p-1.5 text-sm font-medium">
            <div className="flex items-center text-zinc-300">
              <HiMiniArrowUp /> 0
            </div>
            <CircleChart percentage={65} />
          </div>
        </div> */}
      </div>
      {/* profits stats */}
      <div className="w-full space-y-2.5 rounded-lg bg-arx-black-4 p-3 md:w-1/2">
        <p className="text-sm text-zinc-400">Profits</p>
        <div className="flex items-center justify-between gap-2 text-sm">
          <p className="text-lg font-bold md:text-xl">1336.7 USDT</p>
          <div className="flex items-center font-medium text-zinc-300">
            <HiMiniArrowUp /> 0
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 text-sm">
          <p className="text-lg font-bold md:text-xl">Label Profit</p>
          <div className="flex items-center font-medium text-zinc-300">
            <HiMiniArrowUp /> 0
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
