"use client";

import { menuConfig } from "@/utils/menuConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = ({ setOpen }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-4 font-medium md:flex-row md:items-center lg:gap-6 xl:gap-8">
        {menuConfig?.map((menu) => {
          const isActive =
            pathname === menu.path ||
            (menu.path !== "/" && pathname.startsWith(menu.path));
          return (
            <li
              key={menu.path}
              className={
                isActive
                  ? "text-sts-secondary"
                  : "text-sts-subtitle hover:text-sts-secondary/90 transition-all"
              }
            >
              <Link onClick={() => setOpen(false)} href={menu.path}>
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItems;
