import React from "react";
import HexagonTrophy from "./_components/HexagonTrophy";
import TeamStats from "./_components/TeamStats";

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

const DashboardHomePage = async () => {
  return (
    <div className="lg:space-y-7.5 space-y-4 sm:space-y-6 2xl:space-y-10">
      <TeamStats />
      <HexagonTrophy />
    </div>
  );
};

export default DashboardHomePage;
