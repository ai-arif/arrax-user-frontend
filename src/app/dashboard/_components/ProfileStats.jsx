import React from "react";

const ProfileStats = ({ totalTeam, activeTeam, directReferrals }) => {
  return (
    <div className="dashboard-bottom-spacing">
      <h2 className="mb-3 text-lg font-bold md:mb-4 md:text-xl">
        Team & Partners
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        <div className="space-y-1 rounded-lg bg-arx-black-4 p-4 shadow">
          <h3 className="text-base font-semibold md:text-lg">
            Direct Referrals
          </h3>
          <p className="text-custom-style text-xl font-bold md:text-2xl">
            {directReferrals}
          </p>
          <p className="text-sm text-zinc-400">
            {/* TODO: Add dynamic logic */}
            Today joined: {0}
          </p>
        </div>
        <div className="space-y-1 rounded-lg bg-arx-black-4 p-4 shadow">
          <h3 className="text-base font-semibold md:text-lg">Total Team</h3>
          <p className="text-custom-style text-xl font-bold md:text-2xl">
            {totalTeam}
          </p>
          <p className="text-sm text-zinc-400">
            {/* TODO: Add dynamic logic */}
            Today joined: {0}
          </p>
        </div>
        <div className="space-y-1 rounded-lg bg-arx-black-4 p-4 shadow">
          <h3 className="text-base font-semibold md:text-lg">Active Team</h3>
          <p className="text-custom-style text-xl font-bold md:text-2xl">
            {activeTeam}
          </p>
          <p className="text-sm text-zinc-400">Active users currently</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
