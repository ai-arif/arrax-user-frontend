"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import "animate.css";
import Image from "next/image";
import React, { useEffect } from "react";
import assets from "../../../../public/images";
const WOW = typeof window !== "undefined" ? require("wowjs") : null;

const HeroSection = () => {
  useEffect(() => {
    if (WOW) {
      new WOW.WOW().init();
    }
  }, []);

  return (
    <Container>
      <div className="flex flex-col justify-between gap-8 md:items-center md:gap-10 lg:flex-row">
        {/* hero content */}
        <div className="w-full space-y-3 text-center md:space-y-5 lg:w-1/2 lg:text-left">
          <p className="text-base font-medium text-stroke md:text-lg md:font-semibold">
            Easy Secure Fast
          </p>
          <h1 className="text-custom-style text-2xl font-bold md:text-4xl lg:text-[40px] lg:leading-[55px] xl:text-[55px] xl:leading-tight">
            Arrax Space: The Heart of MetaDynamics
          </h1>
          <p className="text-zinc-300 md:leading-7">
            Arrax Space is the native cryptocurrency powering MetaDynamics.
            Designed with ethical tokenomics in mind, Arrax Space prioritizes
            fairness, stability, and scalability. The coin&apos;s robust
            architecture ensures seamless transactions, low fees, and enhanced
            security.
          </p>
          <div className="space-x-3 md:space-x-4">
            <Button
              size="lg"
              className="wow animate__animated animate__bounceIn rounded-full"
              data-wow-delay="0.4s"
            >
              Login
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="wow animate__animated animate__bounceIn rounded-full"
              data-wow-delay="0.6s"
            >
              Register
            </Button>
          </div>
        </div>
        {/* hero image */}
        <div className="w-full md:w-[70%] lg:w-1/2">
          <Image
            className="h-auto w-full rounded-md object-cover"
            src={assets?.images?.mainBanner}
            alt="Arrax Space"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
