"use client";

import SlotCard from "@/components/dashboard_shared_ui/SlotCard";
import FailedUI from "@/components/ui/FailedUI";
import { useMatrix } from "@/hooks/useMatrix";
import React, { useEffect, useState } from "react";
import MatrixSkeleton from "./MatrixSkeleton";

const MatrixSlots = () => {
  const { data: matrixData = {}, isLoading, isError } = useMatrix();
  const [currentSlot, setCurrentSlot] = useState(0);
  useEffect(() => {
    console.log(matrixData);
    if(matrixData?.success==true){
      setCurrentSlot(matrixData?.data?.activeSlot)
    }
  })
  
  if (isLoading) return <MatrixSkeleton />;

  if (isError) return <FailedUI />;
  // create slots array, which will contain
  // slotNumber, price,recycleUserCount, recycleCount
  // 4, 8, 15, 30, 60, 120, 240, 480, 960, 1920
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
        <h1>{currentSlot}</h1>
        {/* {matrixData?.data?.map((slot, index) => (
          <SlotCard key={slot._id} slot={slot} index={index} />
        ))} */}
        {/* form a array of length 10, and pass currentSlot also index */}
        {[...Array(10)].map((_, index) => (
          <SlotCard key={index} index={index} slot={slots[index]} currentSlot={currentSlot} isActive={slots[index].slotNumber<parseInt(currentSlot)} showUpgrade={(parseInt(currentSlot)) === index}/>
        ))}
      </div>
    </div>
  );
};

export default MatrixSlots;
