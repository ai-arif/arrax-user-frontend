import Slots from "@/app/dashboard/matrix/_components/Slots";
import React from "react";
import { FaRotate, FaUsers } from "react-icons/fa6";

const PurchasedSlots = () => {
  return (
    <div className="dashboard-bottom-spacing">
      {/* Title */}
      <h2 className="pb-3 text-lg font-semibold md:pb-4 md:text-xl">
        Purchased Slots
      </h2>

      {/* Slots cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {[1, 2, 3]?.map((item) => (
          <div
            key={item}
            className="space-y-5 rounded-lg border border-purple-600 bg-gradient-to-r from-[#231525] to-[#241d25] p-4 shadow-md shadow-purple-600 md:space-y-7 md:p-5"
          >
            {/* name and price part */}
            <div className="flex items-center justify-between gap-2">
              <h5 className="text-xl font-semibold md:text-2xl">Slot {1}</h5>

              <p className="text-lg font-medium text-arx-primary md:text-xl">
                ${120}
              </p>
            </div>

            {/* Slots: Active */}
            <div className="flex flex-col gap-3">
              <Slots
                subSlots={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                start={0}
                end={3}
              />
              <Slots
                subSlots={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                start={3}
              />
            </div>

            {/* Recycle Count */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <FaUsers />
                <span className="text-arx-primary">{3}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRotate />
                <span className="text-arx-primary">{7}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasedSlots;
