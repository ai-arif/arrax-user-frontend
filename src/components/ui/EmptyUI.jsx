import React from "react";

const EmptyUI = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-6 text-center text-zinc-400 md:gap-3 md:py-10">
      {/* SVG Illustration */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-20 w-20 text-zinc-500 md:h-24 md:w-24"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 11-2 0v-4zm1 7a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
          clipRule="evenodd"
        />
      </svg>

      {/* Message */}
      <div className="text-xl font-semibold md:text-2xl">
        {message || "No data found"}
      </div>
    </div>
  );
};

export default EmptyUI;
