"use client";

import Logo from "@/components/ui/Logo";
import React, { useState } from "react";
import AuthNavItem from "./AuthNavItem";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* logo */}
      <Logo />

      <div className="flex items-center gap-6 sm:gap-10">
        {/* Sidebar auth (login and sign up) / Dashboard */}
        <AuthNavItem />
        <p>Mobile Navbar</p>
      </div>
    </>
  );
};

export default MobileNavbar;
