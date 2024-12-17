import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/Logo";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext } from "react";
import { LuSearch } from "react-icons/lu";

const Header = ({ trigger, sidebarOpen, setSidebarOpen }) => {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-700 bg-arx-black-5 drop-shadow-sm">
      {/* for large screen */}
      <div className="hidden items-center justify-between px-4 py-2 sm:px-6 lg:flex lg:px-7.5 lg:py-3 2xl:p-10">
        {/* input search */}
        <form className="flex w-[40%]">
          <Input
            type="search"
            placeholder="Search..."
            required
            className="h-8 rounded-r-none"
          />
          <Button type="submit" className="rounded-l-none" size="sm">
            Search <LuSearch />
          </Button>
        </form>
        {/* User profile */}
        <div>
          <Avatar
            className={`h-10 w-10 ${loggedInUser?.image && "border border-arx-primary"}`}
          >
            <AvatarImage
              src={loggedInUser?.image || "/images/dashboard/avatar.png"}
            />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* for small screen */}
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:hidden lg:px-7.5 lg:py-3 2xl:p-10">
        {/* logo */}
        <Logo />

        {/* Hamburger button */}
        <button
          ref={trigger}
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className="rounded-sm border border-zinc-500 p-1.5 shadow-sm"
        >
          <span className="relative block size-[22px] cursor-pointer">
            <span className="du-block absolute right-0 h-full w-full">
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-0 duration-200 ease-in-out ${
                  !sidebarOpen && "!w-full delay-300"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-150 duration-200 ease-in-out ${
                  !sidebarOpen && "delay-400 !w-full"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-200 duration-200 ease-in-out ${
                  !sidebarOpen && "!w-full delay-500"
                }`}
              ></span>
            </span>
            <span className="absolute right-0 h-full w-full rotate-45">
              <span
                className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out ${
                  !sidebarOpen && "!h-0 !delay-0"
                }`}
              ></span>
              <span
                className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out ${
                  !sidebarOpen && "!h-0 !delay-200"
                }`}
              ></span>
            </span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
