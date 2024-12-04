import Logo from "@/components/ui/Logo";
import React from "react";
import NavTopBar from "./NavTopBar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
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
