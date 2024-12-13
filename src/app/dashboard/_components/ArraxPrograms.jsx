import React from "react";
import { BsArrowUpRightCircleFill, BsQuestionCircleFill } from "react-icons/bs";

const ArraxPrograms = () => {
  const programs = [
    {
      title: "x3",
      amount: "26 770 USDT",
      gradient: "bg-gradient-x3",
    },
    {
      title: "x4",
      amount: "74 315 USDT",
      gradient: "bg-gradient-x4",
    },
    // {
    //   title: "xXx",
    //   amount: "34 024.2 BUSD",
    //   gradient: "bg-gradient-xXx",
    // },
    // {
    //   title: "xGold",
    //   amount: "72 296 BUSD",
    //   gradient: "bg-gradient-xGold",
    // },
  ];

  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="flex items-center gap-2">
        <h4 className="text-xl font-bold text-white md:text-2xl">
          Arrax Programs
        </h4>
        <div className="flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-sm text-white">
          <BsQuestionCircleFill /> Info
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`${program.gradient} relative rounded-lg p-4 shadow-lg`}
          >
            {/* Top Section */}
            <div className="flex items-center justify-between gap-2 text-lg font-bold text-white md:text-xl">
              <p>{program.title}</p>
              <p>{program.amount}</p>
            </div>

            {/* Middle Section (Small Boxes) */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, boxIndex) => (
                <div
                  key={boxIndex}
                  className="h-6 w-6 rounded-md bg-blue-900 opacity-70"
                ></div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-4 flex items-center justify-between">
              {/* Preview Button */}
              <button className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-600">
                Preview <BsArrowUpRightCircleFill />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArraxPrograms;
