"use client";

import SlotCard from "@/components/dashboard_shared_ui/SlotCard";
import FailedUI from "@/components/ui/FailedUI";
import { useMatrix } from "@/hooks/useMatrix";
import React from "react";
import MatrixSkeleton from "./MatrixSkeleton";

const MatrixSlots = () => {
  const { data: matrixData = {}, isLoading, isError } = useMatrix();

  if (isLoading) return <MatrixSkeleton />;

  if (isError) return <FailedUI />;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {matrixData?.data?.map((slot, index) => (
          <SlotCard key={slot._id} slot={slot} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MatrixSlots;
