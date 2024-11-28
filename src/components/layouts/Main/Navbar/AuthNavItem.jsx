"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AuthNavItem = () => {
  // const { loggedInUser } = useContext(AuthContext);
  // TODO: removed it just for testing
  const loggedInUser = true;

  return (
    <Button
      asChild
      size="lg"
      // className="rounded-full text-base font-semibold tracking-wide"
    >
      {loggedInUser ? (
        <Link href="/dashboard">Dashboard</Link>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </Button>
  );
};

export default AuthNavItem;
