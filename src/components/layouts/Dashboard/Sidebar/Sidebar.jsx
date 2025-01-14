import UserSearch from "@/components/search/UserSearch";
import Logo from "@/components/ui/Logo";
import { AuthContext } from "@/contexts/AuthProvider";
import { dashboardMenuConfig } from "@/utils/dashboardMenuConfig";
import React, { useContext, useEffect, useRef } from "react";
import { CgLogOut } from "react-icons/cg";
import SidebarFooter from "./SidebarFooter";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ trigger, sidebarOpen, setSidebarOpen }) => {
  const { loggedInUser, handleLogout } = useContext(AuthContext);
  const sidebar = useRef(null);

  // Normalize roles to ensure consistent structure
  const normalizedRoles = Array.isArray(loggedInUser?.roles)
    ? loggedInUser?.roles
    : [loggedInUser?.roles];

  // Filter menu items based on the normalized roles
  const filteredMenuConfig = dashboardMenuConfig?.filter((menuItem) =>
    menuItem?.roles?.some((role) => normalizedRoles?.includes(role)),
  );

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebar.current &&
        !sidebar.current.contains(event.target) &&
        !trigger.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [trigger, setSidebarOpen]);

  // Close sidebar on 'Esc' key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [setSidebarOpen]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-[60%] flex-col overflow-y-hidden border-r border-gray-800 bg-black duration-300 ease-linear sm:w-64 lg:static lg:translate-x-0 2xl:w-72 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* SIDEBAR HEADER */}
      <div className="flex flex-col gap-4 px-4 py-4 sm:gap-5 sm:px-5 md:py-5">
        <div className="flex justify-between lg:justify-between">
          {/* logo */}
          <Logo />
          {/* arrow icon */}
          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* search only for small screen */}
        <div className="block lg:hidden">
          <UserSearch className="w-full" />
        </div>
      </div>
      <div className="no-scrollbar overflow-y-auto">
        {/* SIDEBAR MENU */}
        <nav className="px-4 lg:px-5">
          <ul className="flex flex-col gap-2.5">
            {filteredMenuConfig?.map((menuItem, idx) => (
              <SidebarItem
                key={idx}
                menuItem={menuItem}
                setSidebarOpen={setSidebarOpen}
              />
            ))}
            <li
              onClick={handleLogout}
              className="flex cursor-pointer items-center gap-2.5 px-4 py-2 font-semibold text-gray-400 transition-all duration-75 hover:rounded-md hover:bg-purple-600 hover:text-white"
            >
              <CgLogOut className="text-lg md:text-xl" /> Logout
            </li>
          </ul>
        </nav>
      </div>
      {/* SIDEBAR FOOTER */}
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
