import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";

const HexagonTrophy = () => {
  return (
    <div className="bg-arx-primary-light flex items-center justify-between rounded-lg p-5 shadow-lg">
      {/* hexagon trophy */}
      <div className="flex flex-grow justify-around gap-4">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="hexagon-shape relative flex h-16 w-16 items-center justify-center overflow-hidden bg-[#353535]"
          >
            <BsTrophyFill className="text-3xl text-[#252525]" />
          </div>
        ))}
      </div>
      {/* show all button */}
      <button className="group flex items-center gap-2">
        <span className="text-sm text-zinc-300 group-hover:text-zinc-200">
          Show all
        </span>
        <div className="hexagon-shape relative flex h-6 w-6 items-center justify-center overflow-hidden bg-arx-blue-5">
          <FaChevronRight className="text-xs text-white" />
        </div>
      </button>
    </div>
  );
};

export default HexagonTrophy;
