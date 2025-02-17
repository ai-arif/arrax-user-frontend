import SlotCard from "@/components/dashboard_shared_ui/SlotCard";
import React from "react";

const PurchasedSlots = ({ slotDetails, activeSlot, refetch, user }) => {
  const subSlots = [
    {
      _id: 1,
      isPurchased: false,
    },
    {
      _id: 2,
      isPurchased: false,
    },
    {
      _id: 3,
      isPurchased: false,
    },
    {
      _id: 4,
      isPurchased: false,
    },
    {
      _id: 5,
      isPurchased: false,
    },
    {
      _id: 6,
      isPurchased: false,
    },
    {
      _id: 7,
      isPurchased: false,
    },
    {
      _id: 8,
      isPurchased: false,
    },
    {
      _id: 9,
      isPurchased: false,
    },
    {
      _id: 10,
      isPurchased: false,
    },
    {
      _id: 11,
      isPurchased: false,
    },
    {
      _id: 12,
      isPurchased: false,
    },
  ];
  const slots = [
    {
      slotNumber: 1,
      price: 4,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 2,
      price: 8,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 3,
      price: 15,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 4,
      price: 30,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 5,
      price: 60,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 6,
      price: 120,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 7,
      price: 240,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 8,
      price: 480,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 9,
      price: 960,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
    {
      slotNumber: 10,
      price: 1920,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots,
    },
  ];

  return (
    <div className="dashboard-bottom-spacing">
      {/* Title */}
      <h2 className="pb-3 text-lg font-semibold text-zinc-200 md:pb-4 md:text-xl">
        Purchased Slots
      </h2>

      {/* Slots cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {slots?.map((slot, index) => (
          <SlotCard
            adminAccess={true}
            key={slot._id}
            isActive={slot.slotNumber <= parseInt(activeSlot, 10)}
            currentSlot={activeSlot}
            slot={slot}
            index={index}
            slotDetails={slotDetails?.[index]}
            showUpgrade={parseInt(activeSlot, 10) === index}
            refetch={refetch}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default PurchasedSlots;
