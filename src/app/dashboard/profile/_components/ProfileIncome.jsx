import React from "react";

const ProfileIncome = ({ income }) => {
  const { total, directIncome, levelIncome } = income;

  return (
    <div className="dashboard-bottom-spacing">
      <div className="rounded-lg bg-arx-black-4 p-5 shadow-lg md:p-6">
        <h2 className="mb-4 text-lg font-bold md:text-xl">Income Overview</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded bg-gray-800 p-4 shadow">
            <h3 className="text-lg font-semibold">Total Income</h3>
            <p className="text-2xl font-bold text-green-400">${total || 0}</p>
            <p className="text-sm text-gray-400">
              Includes recycling and total earnings
            </p>
          </div>
          <div className="rounded bg-gray-800 p-4 shadow">
            <h3 className="text-lg font-semibold">Direct Income</h3>
            <p className="text-2xl font-bold text-green-400">
              ${directIncome || 0}
            </p>
            <p className="text-sm text-gray-400">
              Income from Level 1 referrals
            </p>
          </div>
          <div className="rounded bg-gray-800 p-4 shadow">
            <h3 className="text-lg font-semibold">Level Income</h3>
            <p className="text-2xl font-bold text-green-400">
              ${levelIncome || 0}
            </p>
            <p className="text-sm text-gray-400">
              Income from Level 2 and beyond
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIncome;
