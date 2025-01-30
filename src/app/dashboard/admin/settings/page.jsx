"use client";
import React, { useEffect, useState } from "react";
import ToggleCard from "./_components/ToggleCard";
import axiosInstance from "@/utils/axiosInstance";

const SettingsPage = () => {
  const [settings, setSettings] = useState(null);
  useEffect(() => {
    fetchSettings().then((data) => {
      setSettings(data.data);
    });
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await axiosInstance.get("/admin/settings");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      {/* title */}
      <h2 className="mb-3 text-xl font-semibold text-gray-100 md:mb-4 md:text-2xl">
        Settings
      </h2>

      {/* toggle card */}
      <ToggleCard settings={settings} refetch={fetchSettings} />
    </div>
  );
};

export default SettingsPage;
