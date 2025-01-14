import Link from "next/link";
import React from "react";
import { PiTelegramLogo } from "react-icons/pi";
import { SlEnvolope, SlSocialYoutube } from "react-icons/sl";

const SidebarFooter = () => {
  return (
    <div className="absolute bottom-0 w-full bg-black px-4 py-2.5 lg:px-5 lg:py-3">
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
