import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";

const SidebarFooter = () => {
  return (
    <div className="absolute bottom-4 px-4 sm:bottom-6 lg:bottom-7.5 lg:px-5 2xl:bottom-10">
      <ul className="flex flex-wrap gap-4 md:gap-3">
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
            href="/"
            target="_blank"
            className="dashboard-social-link-style"
          >
            <FaWhatsapp />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            target="_blank"
            className="dashboard-social-link-style"
          >
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            target="_blank"
            className="dashboard-social-link-style"
          >
            <SlSocialFacebook />
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
        <li>
          <Link
            href="/"
            target="_blank"
            className="dashboard-social-link-style"
          >
            <RiTwitterXFill />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarFooter;
