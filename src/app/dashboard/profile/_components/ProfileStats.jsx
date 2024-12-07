import React from "react";

const ProfileStats = ({ totalTeam, activeTeam, directReferrals }) => {
  return (
    <div className="rounded-lg bg-gray-900 p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Team & Partners</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded bg-gray-800 p-4 shadow">
          <h3 className="text-lg font-semibold">Direct Referrals</h3>
          <p className="text-2xl font-bold text-green-400">{directReferrals}</p>
          <p className="text-sm text-gray-400">
            Today joined: {0 /* Add dynamic logic */}
          </p>
        </div>
        <div className="rounded bg-gray-800 p-4 shadow">
          <h3 className="text-lg font-semibold">Total Team</h3>
          <p className="text-2xl font-bold text-green-400">{totalTeam}</p>
          <p className="text-sm text-gray-400">
            Today joined: {0 /* Add dynamic logic */}
          </p>
        </div>
        <div className="rounded bg-gray-800 p-4 shadow">
          <h3 className="text-lg font-semibold">Active Team</h3>
          <p className="text-2xl font-bold text-green-400">{activeTeam}</p>
          <p className="text-sm text-gray-400">Active users currently</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
