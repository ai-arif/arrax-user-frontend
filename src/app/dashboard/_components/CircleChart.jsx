import React from "react";

const CircleChart = ({ percentage }) => {
  const radius = 20; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Calculate offset based on percentage

  return (
    <svg className="h-5 w-5 rotate-[-90deg] transform" width="50" height="50">
      {/* Background circle */}
      <circle
        cx="25"
        cy="25"
        r={radius}
        fill="none"
        stroke="#e5e7eb" // Tailwind color for gray-200
        strokeWidth="4"
      />
      {/* Foreground circle */}
      <circle
        cx="25"
        cy="25"
        r={radius}
        fill="none"
        stroke="#4f46e5" // Tailwind color for indigo-500
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CircleChart;
