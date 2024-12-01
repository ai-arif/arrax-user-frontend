import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <div className={cn("pb-7 md:pb-10", className)}>
      <h4 className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-center text-xl font-semibold uppercase text-transparent md:text-3xl md:font-bold">
        {children}
      </h4>
      <hr className="mx-auto mt-2 w-[70px] border border-purple-400 md:mt-3.5" />
    </div>
  );
};

export default SectionTitle;
