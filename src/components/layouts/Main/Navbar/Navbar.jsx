import Logo from "@/components/ui/Logo";
import React from "react";
import AuthNavItem from "./AuthNavItem";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b">
      <div className="navbar-container">
        {/* ------- for large screen ------- */}
        <div className="hidden items-center justify-between py-1 md:flex">
          {/* Logo */}
          <Logo />
          {/* Navbar items */}
          <NavItems />
          {/* Sidebar auth (login and sign up) / Dashboard */}
          <AuthNavItem />
        </div>

        {/* ------- for small screen ------- */}
        {/* <div className="flex items-center justify-between py-2 md:hidden">
          <MobileNavbar />
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
