"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search = ({ className }) => {
  return (
    <form className={cn("flex", className)}>
      <Input
        type="search"
        placeholder="Search..."
        required
        className="h-8 rounded-r-none"
      />
      <Button type="submit" className="rounded-l-none" size="sm">
        Search <LuSearch />
      </Button>
    </form>
  );
};

export default Search;
