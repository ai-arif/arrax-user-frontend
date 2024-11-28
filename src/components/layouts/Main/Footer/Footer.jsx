import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-sm text-white">
      <p className="py-4 text-center text-gray-200">
        Copyright © {currentYear} Devs. All Rights Reserved.
      </p>
    </footer>
  );
};
export default Footer;
