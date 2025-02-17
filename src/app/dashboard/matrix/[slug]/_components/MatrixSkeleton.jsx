import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const MatrixSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="space-y-5 rounded-lg border border-zinc-700 bg-arx-black-4 p-4 shadow-lg md:space-y-6 md:p-5"
        >
          <div className="flex items-center justify-between gap-2">
            <Skeleton className="h-7 w-20 rounded-none" />
            <Skeleton className="h-5 w-12 rounded-none" />
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap justify-around gap-3">
              <Skeleton className="size-6 rounded-sm" />
              <Skeleton className="size-6 rounded-sm" />
              <Skeleton className="size-6 rounded-sm" />
            </div>
            <div className="flex flex-wrap justify-between gap-1">
              {[...Array(9)].map((_, slotIndex) => (
                <Skeleton key={slotIndex} className="size-6 rounded-sm" />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Skeleton className="h-5 w-7 rounded-sm" />
            <Skeleton className="h-5 w-7 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatrixSkeleton;
