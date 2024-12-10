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
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import { FaWallet } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import AuthNavItem from "./AuthNavItem";

const NavTopBar = () => {
  const [open, setOpen] = useState(false);
  const userId = Cookies.get("arx_user_id");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <RxHamburgerMenu className="cursor-pointer text-3xl" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-max min-h-[40%] border-b-0 bg-arx-black-5 p-5 sm:p-8"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        {/* Navbar Content */}
        <div className="top-container">
          <div className="space-y-4 md:space-y-6">
            {/* search & logo part */}
            <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row md:gap-8 lg:gap-16">
              <Logo />
              <form className="mx-auto flex w-full sm:w-[70%] md:w-full">
                <Input
                  type="search"
                  placeholder="Search..."
                  required
                  className="rounded-r-none"
                />
                <Button type="submit" className="rounded-l-none">
                  Search <LuSearch />
                </Button>
              </form>
            </div>
            {/* Wallet Connect & Generation */}
            <div className="mx-auto flex w-full flex-col gap-3 sm:w-[70%] md:w-[50%] md:gap-4 lg:w-[45%]">
              <Button variant="secondary">
                <FaWallet /> Connect Wallet
              </Button>

              <Button
                onClick={() => setOpen(false)}
                variant="secondary"
                className="bg-teal-600"
                asChild
              >
                <Link href={userId ? "/dashboard/team" : "/login"}>
                  Generation
                </Link>
              </Button>
              {/* auth buttons (register/profile) */}
              <AuthNavItem setOpen={setOpen} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavTopBar;
