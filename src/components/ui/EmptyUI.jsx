import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const EmptyUI = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-6 text-center text-zinc-400 md:gap-3 md:py-10">
      <div>
        <FiAlertCircle className="text-5xl text-zinc-500 md:text-7xl" />
      </div>
      <div className="text-lg font-medium md:text-2xl md:font-semibold">
        {message || "No data found"}
      </div>
    </div>
  );
};

export default EmptyUI;
