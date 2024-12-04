"use client";

import Logo from "@/components/ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const NavTopBar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="">
          <svg
            fill="#ffffff"
            width="44px"
            height="44px"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L3.5,7 Z M3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L3.5,12 Z M3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L3.5,17 Z"></path>
            </g>
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-[60%] border-b-0 bg-arx-black-5 p-5 sm:h-[50%] md:h-[40%] lg:p-8"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        {/* Navbar Content */}
        <div className="space-y-4">
          {/* Wallet Connect */}
          <button className="rounded-md bg-purple-500 px-4 py-2 text-white">
            Wallet Connect
          </button>

          {/* Generation */}
          <button className="rounded-md bg-green-500 px-4 py-2 text-white">
            Generation
          </button>

          {/* Search Bar */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16l4-4-4-4m5 0h7m0 0v7m0-7l-7 7"
                />
              </svg>
            </button>
            {searchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg bg-gray-700 p-2 text-white"
              />
            )}
          </div>

          {/* Register & Profile */}
          <div className="flex items-center justify-between">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
              Register
            </button>
            <button className="rounded-md bg-gray-500 px-4 py-2 text-white">
              Profile
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavTopBar;
