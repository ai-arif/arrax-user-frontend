import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ title, description, className }) => {
  return (
    <div className={cn("pb-6 text-center md:pb-10", className)}>
      <h4 className="text-custom-style text-xl font-semibold uppercase md:text-3xl md:font-bold">
        {title}
      </h4>
      <p className="pt-2.5 text-xs text-zinc-200 md:pt-4 md:text-sm">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
