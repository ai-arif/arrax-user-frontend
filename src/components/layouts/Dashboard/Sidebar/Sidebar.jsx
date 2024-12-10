import Logo from "@/components/ui/Logo";
import { AuthContext } from "@/contexts/AuthProvider";
import { dashboardMenuConfig } from "@/utils/dashboardMenuConfig";
import React, { useContext, useEffect, useRef } from "react";
import { CgLogOut } from "react-icons/cg";
import { RxArrowLeft } from "react-icons/rx";
import SidebarFooter from "./SidebarFooter";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { handleLogout } = useContext(AuthContext);
  const trigger = useRef(null);
  const sidebar = useRef(null);

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
  }, [setSidebarOpen]);

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
      className={`absolute left-0 top-0 z-50 flex h-screen w-[60%] flex-col overflow-y-hidden border-r border-zinc-700 bg-arx-black-5 duration-300 ease-linear sm:w-64 lg:static lg:translate-x-0 2xl:w-72 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* SIDEBAR HEADER */}
      <div className="flex justify-between px-4 py-4 sm:px-5 lg:justify-center">
        <Logo />
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block text-3xl lg:hidden"
        >
          <RxArrowLeft />
        </button>
      </div>
      <div className="no-scrollbar overflow-y-auto">
        {/* SIDEBAR MENU */}
        <nav className="px-4 lg:px-5">
          <ul className="flex flex-col gap-2.5">
            {dashboardMenuConfig?.map((menuItem, idx) => (
              <SidebarItem
                key={idx}
                menuItem={menuItem}
                setSidebarOpen={setSidebarOpen}
              />
            ))}
            <li
              onClick={handleLogout}
              className="flex cursor-pointer items-center gap-2.5 px-4 py-2 font-semibold text-zinc-400 transition-all duration-75 hover:rounded-md hover:bg-zinc-800 hover:text-white"
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
