import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiPolygon } from "react-icons/si";
import assets from "../../../../public/images";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse justify-between gap-6 md:items-center md:gap-10 lg:flex-row">
        {/* hero content */}
        <div className="w-full space-y-3 text-center md:space-y-5 lg:w-1/2 lg:text-left">
          <h1 className="text-custom-style text-2xl font-bold md:text-4xl lg:text-[40px] lg:leading-[55px] xl:text-[50px] xl:leading-tight">
            Welcome to Arrax Safe, Secure, and Unlimited, Earning Opportunities!
          </h1>
          <p className="text-zinc-300">
            Unlock a world of financial freedom with the power of blockchain
            technology. Join a global!
          </p>
          <div className="space-x-3 md:space-x-4 md:pt-3">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              asChild
            >
              <Link href="/login">Register</Link>
            </Button>
          </div>
          <div className="pt-3">
            <div className="flex w-full justify-center gap-3 rounded-md border border-arx-primary px-5 py-2 text-center md:px-8 md:py-5 lg:w-[80%]">
              <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-arx-primary to-arx-secondary">
                <SiPolygon />
              </div>
              <p className="text-lg font-semibold uppercase text-arx-primary md:text-xl">
                Powered by bnb <br /> blockchain
              </p>
            </div>
          </div>
        </div>

        {/* hero image */}
        <div className="w-full md:w-[70%] lg:w-1/2">
          <Image
            className="animate-floa mx-auto h-auto w-[50%] object-cover md:w-[55%] lg:ml-auto lg:w-[70%]"
            src={assets?.images?.banner}
            alt="Arrax Space"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
