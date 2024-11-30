import React from "react";
import TeamStats from "./_components/TeamStats";

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

const DashboardHomePage = async () => {
  return (
    <div>
      <TeamStats />
    </div>
  );
};

export default DashboardHomePage;
