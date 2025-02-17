import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineNoSymbol } from "react-icons/hi2";
import SidebarDropdown from "./SidebarDropdown";

const SidebarItem = ({ menuItem, setSidebarOpen }) => {
  const [groupOpen, setGroupOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setGroupOpen(!groupOpen);
    setSidebarOpen(false);
  };

  const isActive = (menuItem) => {
    if (pathname === menuItem.path) return true;

    if (menuItem.children) {
      return menuItem.children.some((child) => isActive(child));
    }

    return false;
  };

  const isItemActive = isActive(menuItem);

  return (
    <li>
      <Link
        href={menuItem.path}
        onClick={handleClick}
        className={`${isItemActive ? "rounded-md bg-purple-600 text-white" : "text-gray-400 hover:rounded-md hover:bg-purple-500 hover:text-white"} group relative flex items-center gap-2.5 px-4 py-2 font-semibold transition-all duration-75`}
      >
        {menuItem.icon}
        {menuItem.label}
        {!menuItem.enabled && <HiOutlineNoSymbol className="text-red-700" />}
        {menuItem.children && (
          <svg
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${groupOpen && "rotate-180"}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
              fill=""
            />
          </svg>
        )}
      </Link>

      {menuItem.children && (
        <div className={`transform overflow-hidden ${!groupOpen && "hidden"}`}>
          <SidebarDropdown menuItems={menuItem.children} />
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
