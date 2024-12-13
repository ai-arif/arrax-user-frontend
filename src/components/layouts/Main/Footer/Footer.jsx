"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import "animate.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { SlEnvolope, SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";
const WOW = typeof window !== "undefined" ? require("wowjs") : null;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (WOW) {
      new WOW.WOW().init();
    }
  }, []);

  return (
    <footer className="bg-black">
      <Container>
        <div
          className="wow animate__animated animate__fadeInLeft mb-3 flex flex-col items-center space-y-5 md:mb-5 md:space-y-7"
          data-wow-delay="0.2s"
          data-wow-duration="1s"
        >
          <div>
            <Logo className="w-[130px] md:w-[160px]" />
          </div>
          <Button size="sm" className="text-xs">
            Smart Contact Info
          </Button>
          <div className="pb-3 md:pb-5">
            <h4 className="text-custom-style pb-4 text-center text-2xl font-bold">
              Social Media
            </h4>
            <ul className="flex flex-wrap gap-3 md:gap-5">
              <li>
                <Link
                  href="https://t.me/Arraxspace"
                  target="_blank"
                  className="social-link-style"
                >
                  <PiTelegramLogo />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:arraxspace@gmail.com"
                  target="_blank"
                  className="social-link-style"
                >
                  <SlEnvolope />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@ArraxSpace"
                  target="_blank"
                  className="social-link-style"
                >
                  <SlSocialYoutube />
                </Link>
              </li>
              {/* <li>
                <Link href="/" target="_blank" className="social-link-style">
                  <FaWhatsapp />
                </Link>
              </li> */}
              {/* <li>
                <Link href="/" target="_blank" className="social-link-style">
                  <FaInstagram />
                </Link>
              </li> */}
              {/* <li>
                <Link href="/" target="_blank" className="social-link-style">
                  <SlSocialFacebook />
                </Link>
              </li> */}
              {/* <li>
                <Link href="/" target="_blank" className="social-link-style">
                  <RiTwitterXFill />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <hr className="w-full border-gray-900" />
        <p className="mt-5 text-center text-sm text-slate-300 md:mt-7">
          © {currentYear} <span className="text-arx-primary">Arrax Space</span>
          . All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
