"use client";

import Header from "@/components/layouts/Dashboard/Header/Header";
import Sidebar from "@/components/Layouts/Dashboard/Sidebar/Sidebar";
import { useRef, useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const trigger = useRef(null);

  return (
    <div className="flex h-screen overflow-hidden bg-arx-black-5">
      {/* Dashboard Sidebar */}
      <Sidebar
        trigger={trigger}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* Content Area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Dashboard Header */}
        <Header
          trigger={trigger}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* Main Dashboard Content */}
        <section className="mx-auto w-full max-w-screen-2xl p-4 sm:p-6 lg:p-7.5 2xl:p-10">
          {children}
        </section>
      </div>
    </div>
  );
}
