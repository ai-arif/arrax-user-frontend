import React from "react";

const ProfileIncome = ({ income }) => {
  return (
    <div className="dashboard-bottom-spacing">
      <h2 className="mb-3 text-lg font-bold md:mb-4 md:text-xl">
        Income Overview
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        <div className="space-y-1 rounded-lg bg-arx-black-4 p-4 shadow">
          <h3 className="text-base font-semibold md:text-lg">Total Income</h3>
          <p className="text-custom-style text-xl font-bold md:text-2xl">
            ${income?.total}
          </p>
          <p className="text-sm text-zinc-400">
            Includes recycling and total earnings
          </p>
        </div>
        <div className="space-y-1 rounded-lg bg-arx-black-4 p-4 shadow">
          <h3 className="text-base font-semibold md:text-lg">Direct Income</h3>
          <p className="text-custom-style text-xl font-bold md:text-2xl">
            ${income?.directIncome}
          </p>
          <p className="text-sm text-zinc-400">Income from Level 1 referrals</p>
        </div>
        <div className="space-y-1 rounded-lg bg-arx-black-4 p-4 shadow">
          <h3 className="text-base font-semibold md:text-lg">Level Income</h3>
          <p className="text-custom-style text-xl font-bold md:text-2xl">
            ${income?.levelIncome}
          </p>
          <p className="text-sm text-zinc-400">
            Income from Level 2 and beyond
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileIncome;
