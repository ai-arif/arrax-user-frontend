"use client";

import Container from "@/components/ui/Container";
import React, { useEffect, useState } from "react";

const HomeCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15, // Update initial days to 15
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target start date for the countdown
    const startDate = new Date(
      new Date().getFullYear(),
      1, // February (0-based index)
      1, // 1st day of the month
      16, // 4:00 PM
      0,
      0,
      0,
    );

    const updateCountdown = () => {
      const now = new Date();

      // If current time is before February 1, 4:00 PM, show paused state (15 days)
      if (now < startDate) {
        setTimeLeft({
          days: 15, // Update paused state to 15 days
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      // Once we reach February 1, 4:00 PM, start the countdown
      const targetDate = new Date(
        startDate.getTime() + 15 * 24 * 60 * 60 * 1000, // Add 15 days to the start date
      );
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <div className="flex justify-center gap-3 md:gap-6">
        {Object.entries(timeLeft).map(([unit, value], idx) => (
          <div
            key={idx}
            className="space-y-3 rounded-b-xl border-b-2 border-purple-600 p-3 text-center md:space-y-5 md:p-5"
          >
            <p className="text-2xl font-semibold text-white md:text-4xl md:font-bold">
              {value}
            </p>
            <p className="capitalize text-gray-200">{unit}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeCountdown;
