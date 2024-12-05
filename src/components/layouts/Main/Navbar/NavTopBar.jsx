"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import AuthNavItem from "./AuthNavItem";

const NavTopBar = () => {
  const [open, setOpen] = useState(false);

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
        className="h-[60%] border-b-0 bg-arx-black-5 p-5 sm:h-[50%] md:h-[40%] lg:p-10"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        {/* Navbar Content */}
        <div className="top-container">
          <div className="space-y-4 md:space-y-8">
            {/* search & logo part */}
            <div className="flex w-full justify-between gap-3 md:gap-8 lg:gap-16">
              <Logo />
              <form className="flex w-full gap-2">
                <Input type="search" placeholder="Search..." required />
                <Button type="submit">
                  Search <LuSearch />
                </Button>
              </form>
            </div>
            {/* Wallet Connect & Generation */}
            <div className="flex justify-between gap-4">
              <div className="flex gap-4">
                <button className="rounded-md bg-purple-500 px-4 py-2 text-white">
                  Wallet Connect
                </button>

                <button className="rounded-md bg-green-500 px-4 py-2 text-white">
                  Generation
                </button>
              </div>
              {/* auth buttons (register/profile) */}
              <AuthNavItem setOpen={setOpen} />
              {/* <div>
                <Button
                  onClick={() => setOpen(false)}
                  asChild
                  className="rounded-md !bg-blue-500"
                >
                  <Link href="/login">Register</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavTopBar;
