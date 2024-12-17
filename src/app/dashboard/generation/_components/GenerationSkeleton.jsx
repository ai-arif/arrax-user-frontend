import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const GenerationSkeleton = () => {
  return (
    <div>
      <Skeleton className="mb-5 h-6 w-[25%] rounded-none md:w-[15%]" />

      <div className="divide-y divide-zinc-700 rounded-lg bg-arx-black-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 p-4"
          >
            <Skeleton className="h-4 w-[15%] rounded-sm" />
            <Skeleton className="h-4 w-[15%] rounded-sm" />
            <Skeleton className="h-4 w-[15%] rounded-sm" />
            <Skeleton className="h-4 w-[15%] rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerationSkeleton;
