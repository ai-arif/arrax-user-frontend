"use client";

import Sidebar from "@/components/Layouts/Dashboard/Sidebar/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-whiten flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content Area */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Main Dashboard Content */}
        <section className="mx-auto w-full max-w-screen-2xl p-4 sm:p-6 2xl:p-10">
          {children}
        </section>
      </div>
    </div>
  );
}
