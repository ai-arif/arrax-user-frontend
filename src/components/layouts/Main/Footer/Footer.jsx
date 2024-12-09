import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <Container>
        <div className="flex flex-col items-center space-y-5 md:space-y-7">
          <div>
            <Logo />
          </div>
          <Button>Smart Contact Info</Button>
          <div className="pb-3 md:pb-5">
            <h4 className="text-custom-style pb-4 text-center text-2xl font-bold">
              Social Media
            </h4>
            <ul className="flex flex-wrap gap-3 md:gap-5">
              <li>
                <Link
                  href="https://t.me/Arraxspace"
                  target="_blank"
                  className="block rounded-full border-2 border-slate-600 p-2.5 text-xl transition-colors hover:border-arx-primary hover:text-arx-primary"
                >
                  <PiTelegramLogo />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className="block rounded-full border-2 border-slate-600 p-2.5 text-xl transition-colors hover:border-arx-primary hover:text-arx-primary"
                >
                  <FaWhatsapp />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className="block rounded-full border-2 border-slate-600 p-2.5 text-xl transition-colors hover:border-arx-primary hover:text-arx-primary"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className="block rounded-full border-2 border-slate-600 p-2.5 text-xl transition-colors hover:border-arx-primary hover:text-arx-primary"
                >
                  <SlSocialFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@ArraxSpace"
                  target="_blank"
                  className="block rounded-full border-2 border-slate-600 p-2.5 text-xl transition-colors hover:border-arx-primary hover:text-arx-primary"
                >
                  <SlSocialYoutube />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  className="block rounded-full border-2 border-slate-600 p-2.5 text-xl transition-colors hover:border-arx-primary hover:text-arx-primary"
                >
                  <RiTwitterXFill />
                </Link>
              </li>
            </ul>
          </div>
          <hr className="w-full border-gray-900" />
          <p className="text-center text-sm text-slate-300">
            © {currentYear}{" "}
            <span className="text-arx-primary">Arrax Space</span>. All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
