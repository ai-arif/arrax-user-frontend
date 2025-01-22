"use client";

import SlotCard from "@/components/dashboard_shared_ui/SlotCard";
import FailedUI from "@/components/ui/FailedUI";
import { useMatrix } from "@/hooks/useMatrix";
import React, { useEffect, useState } from "react";
import MatrixSkeleton from "./MatrixSkeleton";

const MatrixSlots = () => {
  const { data: matrixData = {}, isLoading, isError, refetch } = useMatrix();
  const [currentSlot, setCurrentSlot] = useState(0);
  const [slotDetails, setSlotDetails] = useState([]);
  useEffect(() => {
    
    if(matrixData?.success==true){
      setCurrentSlot(matrixData?.data?.activeSlot)
      setSlotDetails(matrixData?.data?.slotDetails)
    }
  })
  
  if (isLoading) return <MatrixSkeleton />;

  if (isError) return <FailedUI />;
  
  const subSlots=[{
    _id:1,
    isPurchased:false
  },
  {
    _id:2,
    isPurchased:false
  },
  {
    _id:3,
    isPurchased:false
  },
  {
    _id:4,
    isPurchased:false
  },
  {
    _id:5,
    isPurchased:false
  },
  {
    _id:6,
    isPurchased:false
  },
  {
    _id:7,
    isPurchased:false
  },
  {
    _id:8,
    isPurchased:false
  },
  {
    _id:9,
    isPurchased:false
  },
  {
    _id:10,
    isPurchased:false
  },
  {
    _id:11,
    isPurchased:false
  },
  {
    _id:12,
    isPurchased:false
  },
]
  const slots = [
    {
      slotNumber: 1,
      price: 4,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 2,
      price: 8,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 3,
      price: 15,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 4,
      price: 30,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 5,
      price: 60,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 6,
      price: 120,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 7,
      price: 240,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 8,
      price: 480,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 9,
      price: 960,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
    {
      slotNumber: 10,
      price: 1920,
      recycleUserCount: 0,
      recycleCount: 0,
      subSlots
    },
  ]


  
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {[...Array(10)].map((_, index) => {
          const details = slotDetails?.[index] || null;
          const isActive = slots[index]?.slotNumber <= parseInt(currentSlot, 10);
          const showUpgrade = parseInt(currentSlot, 10) === index;

          return (
            <SlotCard
              key={index}
              index={index}
              slot={slots[index]}
              refetch={refetch}
              slotDetails={details}
              currentSlot={currentSlot}
              isActive={isActive}
              showUpgrade={showUpgrade}
            />
          );
        })}
      </div>
    </div>
  );
};




//   return (
//     <div>
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        
//         {/* {matrixData?.data?.map((slot, index) => (
//           <SlotCard key={slot._id} slot={slot} index={index} />
//         ))} */}
//         {/* form a array of length 10, and pass currentSlot also index */}
//         {[...Array(10)].map((_, index) => (
//           <SlotCard key={index} index={index} slot={slots[index]} refetch={()=>console.log("refetch function will be passed here")} slotDetails={index<slotDetails.length?slotDetails[index]:null} currentSlot={currentSlot} isActive={slots[index].slotNumber<=parseInt(currentSlot)} showUpgrade={(parseInt(currentSlot)) === index}/>
//         ))}
//       </div>
//     </div>
//   );
// };

export default MatrixSlots;
