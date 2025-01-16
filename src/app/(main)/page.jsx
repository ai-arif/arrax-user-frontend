import React from "react";
import HeroSection from "./_components/HeroSection";
import HomeAbout from "./_components/HomeAbout";
import HomeCountdown from "./_components/HomeCountdown";
import HomeFaq from "./_components/HomeFaq";
import HomeIncome from "./_components/HomeIncome";
import HomeStats from "./_components/HomeStats";

export const metadata = {
  title: "Home - Arrax Space",
  description: "Generated by create next app",
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HomeCountdown />
      <HomeAbout />
      <HomeStats />
      <HomeIncome />
      <HomeFaq />
    </>
  );
};

export default HomePage;
