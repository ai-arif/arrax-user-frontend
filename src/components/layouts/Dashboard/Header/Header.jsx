import Logo from "@/components/ui/Logo";
import React from "react";

const Header = ({ trigger, sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-700 bg-arx-black-5 drop-shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:hidden lg:px-7.5 2xl:p-10">
        {/* logo */}
        <Logo />

        <div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>hello</button>
        </div>
        {/* Hamburger button */}
        <button
          ref={trigger}
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className="rounded-sm border border-[#e2e8f0] p-1.5 shadow-sm"
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
