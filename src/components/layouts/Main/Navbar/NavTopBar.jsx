"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuthContext } from "@/contexts/AuthProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaWallet } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const NavTopBar = () => {
  const [open, setOpen] = useState(false);
  const { loggedInUser } = useContext(AuthContext);

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
          <div className="mx-auto flex w-full flex-col justify-start gap-3 sm:w-[70%] sm:justify-center md:w-[50%] md:gap-4 lg:w-[45%]">
            {/* logo */}
            <div className="">
              <Logo className="mx-auto" />
            </div>
            {/* connect wallet button */}
            <Button variant="secondary">
              <FaWallet /> Connect Wallet
            </Button>
            {/* register or dashboard button based on logged in user */}
            <Button onClick={() => setOpen(false)} asChild>
              {loggedInUser ? (
                <Link href="/dashboard">Profile</Link>
              ) : (
                <Link href="/login">Register</Link>
              )}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavTopBar;
