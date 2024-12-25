"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import Link from "next/link";
import React, { useContext } from "react";

const HeroAuthButtons = () => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <div className="flex justify-center gap-3 md:gap-4 md:pt-3 lg:justify-start">
      <Button size="lg" className="rounded-full" asChild>
        {loggedInUser ? (
          <Link href="/dashboard/profile">Profile</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </Button>
      <Button variant="outline" size="lg" className="rounded-full" asChild>
        {loggedInUser ? (
          <Link href="/dashboard">Dashboard</Link>
        ) : (
          <Link href="/login">Register</Link>
        )}
      </Button>
    </div>
  );
};

export default HeroAuthButtons;
