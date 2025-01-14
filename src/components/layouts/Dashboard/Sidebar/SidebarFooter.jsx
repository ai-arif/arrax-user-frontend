import Link from "next/link";
import React from "react";
import { PiTelegramLogo } from "react-icons/pi";
import { SlEnvolope, SlSocialYoutube } from "react-icons/sl";

const SidebarFooter = () => {
  return (
    // <div className="absolute bottom-4 w-full p-4 sm:bottom-6 lg:bottom-7.5 lg:p-5 2xl:bottom-10">
    <div className="absolute bottom-0 w-full bg-black p-4 lg:p-5">
      <ul className="flex flex-wrap justify-center gap-4 md:gap-3">
        <li>
          <Link
            href="https://t.me/Arraxspace"
            target="_blank"
            className="dashboard-social-link-style"
          >
            <PiTelegramLogo />
          </Link>
        </li>
        <li>
          <Link
            href="mailto:arraxspace@gmail.com"
            target="_blank"
            className="dashboard-social-link-style"
          >
            <SlEnvolope />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@ArraxSpace"
            target="_blank"
            className="dashboard-social-link-style"
          >
            <SlSocialYoutube />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarFooter;
