"use client";

import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const MatrixPage = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = Cookies.get("arx_user_id");

  useEffect(() => {
    const fetchGenerations = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/users/user/${userId}/slot`);
        setSlots(response.data?.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
        throw new Error("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchGenerations();
    }
  }, [userId]);

  if (loading) {
    return <p className="py-10 text-center text-2xl font-medium">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {slots?.map((slot) => (
        <div
          key={slot._id}
          className="space-y-3 rounded-lg border border-zinc-700 bg-arx-black-4 p-5 shadow-lg"
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <h6 className="text-sm">Slot {slot?.slotNumber}</h6>
              <p className="text-xs">Total Users:</p>
            </div>
            <div className="text-lg font-medium text-arx-primary md:text-xl">
              $ {slot?.price}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap justify-between gap-3">
              <div className="size-9 rounded-full bg-arx-primary"></div>
              <div className="size-9 rounded-full bg-arx-primary"></div>
              <div className="size-9 rounded-full bg-arx-primary"></div>
            </div>
            <div className="flex flex-wrap justify-between gap-1">
              {slot?.subSlots?.map((item) => (
                <div
                  key={item?._id}
                  className={`size-4 rounded-full ${item?.isPurchased ? "bg-arx-primary" : "bg-white"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatrixPage;
