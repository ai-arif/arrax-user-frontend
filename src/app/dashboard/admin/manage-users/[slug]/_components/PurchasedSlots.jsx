import SlotCard from "@/components/dashboard_shared_ui/SlotCard";
import React from "react";

const PurchasedSlots = ({ slots }) => {
  return (
    <div className="dashboard-bottom-spacing">
      {/* Title */}
      <h2 className="pb-3 text-lg font-semibold text-zinc-200 md:pb-4 md:text-xl">
        Purchased Slots
      </h2>

      {/* Slots cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {slots?.map((slot) => (
          <SlotCard key={slot._id} slot={slot} />
        ))}
      </div>
    </div>
  );
};

export default PurchasedSlots;
