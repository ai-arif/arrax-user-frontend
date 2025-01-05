import React from "react";

const Slots = ({ subSlots, start, end }) => {
  return (
    <div className="flex flex-wrap justify-around gap-2">
      {subSlots?.slice(start, end)?.map((item) => (
        <div
          key={item?._id}
          className={`size-6 rounded-sm ${item?.isPurchased ? "bg-arx-primary" : "bg-white"}`}
        ></div>
      ))}
    </div>
  );
};

export default Slots;
