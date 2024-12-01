import ParticlesBackground from "@/components/ui/ParticlesBackground";
import React from "react";
import HomeFaq from "./_components/HomeFaq";

export const metadata = {
  title: "Home - Arrax Space",
  description: "Generated by create next app",
};

const HomePage = () => {
  return (
    <div>
      {/* particles background chain animation */}
      <ParticlesBackground />
      <HomeFaq />
      {/* <h2 className="my-10 text-center text-2xl font-semibold">Home Page</h2> */}
    </div>
  );
};

export default HomePage;
