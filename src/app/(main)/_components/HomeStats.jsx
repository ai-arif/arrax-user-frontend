"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import "animate.css";
import React, { useEffect } from "react";
const WOW = typeof window !== "undefined" ? require("wowjs") : null;

const HomeStats = () => {
  const totalUsersToday = 123;
  const totalIncomeToday = 4567.89;

  useEffect(() => {
    if (WOW) {
      new WOW.WOW().init();
    }
  }, []);

  return (
    <Container>
      <SectionTitle>Today&apos;s Summary</SectionTitle>
      <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 md:gap-8">
        {/* Total Users Today */}
        <div
          className="wow animate__animated animate__fadeInUp rounded border border-arx-secondary p-5 md:rounded-lg md:p-6"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <h3 className="mb-2 text-base font-medium md:text-lg md:font-semibold">
            Total Users (Today)
          </h3>
          <p className="text-xl font-semibold md:text-3xl md:font-bold">
            {totalUsersToday}
          </p>
        </div>
        {/* Total Income Today */}
        <div
          className="wow animate__animated animate__fadeInUp rounded border border-arx-secondary p-5 md:rounded-lg md:p-6"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <h3 className="mb-2 text-base font-medium md:text-lg md:font-semibold">
            Total Income (Today)
          </h3>
          <p className="text-xl font-semibold md:text-3xl md:font-bold">
            ${totalIncomeToday.toFixed(2)}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default HomeStats;
