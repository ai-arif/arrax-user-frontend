"use client";

import Logo from "@/components/ui/Logo";
import React, { useEffect, useState } from "react";
import NavTopBar from "./NavTopBar";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${isScroll && "custom-bg-blur"}`}>
      <div className="navbar-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Sidebar */}
          <NavTopBar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
