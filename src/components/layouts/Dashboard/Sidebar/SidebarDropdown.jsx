import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarDropdown = ({ menuItems }) => {
  const pathname = usePathname();

  return (
    <ul className="mb-5 mt-4 flex flex-col gap-2.5 pl-4">
      {menuItems?.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out ${
              pathname === item.path
                ? "text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarDropdown;
