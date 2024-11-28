import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarDropdown = ({ item }) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="mb-5 mt-4 flex flex-col gap-2.5 pl-6">
        {item?.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white ${
                pathname === item.path ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
