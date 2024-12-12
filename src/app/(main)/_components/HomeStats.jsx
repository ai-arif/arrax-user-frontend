"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import "animate.css";
import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
const WOW = typeof window !== "undefined" ? require("wowjs") : null;

const HomeStats = () => {
  const totalUsers = 123;
  const totalIncome = 4567;

  useEffect(() => {
    if (WOW) {
      new WOW.WOW().init();
    }
  }, []);

  return (
    <Container>
      <SectionTitle>Key Metrics Overview</SectionTitle>
      <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 md:gap-8">
        {/* Total Users */}
        <div
          className="wow animate__animated animate__fadeInUp space-y-2 rounded border border-arx-secondary p-5 md:rounded-lg md:p-6"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <h4 className="flex items-center gap-2 text-xl font-semibold md:text-3xl md:font-bold">
              <FaUsers /> {totalUsers}
            </h4>
            <p className="flex items-center gap-0.5 text-xs font-medium text-green-500 md:text-sm">
              <FaArrowUp /> 12
            </p>
          </div>
          <p className="mb-2 text-base font-medium md:text-lg md:font-semibold">
            Total Users
          </p>
        </div>
        {/* Total Income */}
        <div
          className="wow animate__animated animate__fadeInUp space-y-2 rounded border border-arx-secondary p-5 md:rounded-lg md:p-6"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <h4 className="text-xl font-semibold md:text-3xl md:font-bold">
              $ {totalIncome}
            </h4>
            <p className="flex items-center gap-0.5 text-xs font-medium text-green-500 md:text-sm">
              <FaArrowUp /> 210
            </p>
          </div>
          <p className="mb-2 text-base font-medium md:text-lg md:font-semibold">
            Total Income
          </p>
        </div>
      </div>
    </Container>
  );
};

export default HomeStats;
