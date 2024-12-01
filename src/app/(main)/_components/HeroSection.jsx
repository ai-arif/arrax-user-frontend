import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import assets from "../../../../public/images";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full space-y-3 md:w-1/2">
          <p className="font-medium">Easy Secure Fast</p>
          <h1 className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-[40px] lg:leading-[55px] xl:text-[55px] xl:leading-tight">
            Arrax Space: The Heart of MetaDynamics
          </h1>
          <p>
            Arrax Space is the native cryptocurrency powering MetaDynamis.
            Designed with ethical tokenomics in mind, Tiger Pro Space
            prioritizes fairness, stability, and scalability. The coin&apos;s
            robust architecture ensures seamless transactions, low fees, and
            enhanced security.
          </p>
          <div className="space-x-3">
            <Button>Login</Button>
            <Button variant="secondary">Register</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image className="" src={assets?.images?.mainBanner} alt="Arrax" />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
