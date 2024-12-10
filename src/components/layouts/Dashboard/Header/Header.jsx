import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import { FaWallet } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-700 bg-arx-black-5 drop-shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-7.5 2xl:p-10">
        {/* Hamburger button */}
        <div>
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="block text-3xl lg:hidden"
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Connect Wallet button */}
        <Button variant="secondary" className="rounded-full" size="sm">
          <FaWallet /> Connect Wallet
        </Button>

        {/* User profile */}
        <div>
          <Avatar className="mx-auto h-8 w-8 md:h-10 md:w-10">
            <AvatarImage
              src={loggedInUser?.image || "/images/dashboard/avatar.png"}
            />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
