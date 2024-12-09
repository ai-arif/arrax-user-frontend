"use client";

import Sidebar from "@/components/Layouts/Dashboard/Sidebar/Sidebar";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-arx-black-5">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content Area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Hamburger button */}
        <div className="sticky top-0 z-20 px-4 pt-3 sm:px-6">
          <RxHamburgerMenu className="cursor-pointer text-3xl" />
        </div>
        {/* Main Dashboard Content */}
        <section className="mx-auto w-full max-w-screen-2xl p-4 sm:p-6 lg:p-7.5 2xl:p-10">
          {children}
        </section>
      </div>
    </div>
  );
}
