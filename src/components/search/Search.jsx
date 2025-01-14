import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search = ({ handleSearch, className, inputClassName }) => {
  return (
    <form
      onSubmit={handleSearch}
      className={cn("flex w-full max-w-sm items-center", className)}
    >
      <Input
        name="search"
        type="search"
        placeholder="Search..."
        className={cn("rounded-r-none bg-gray-800", inputClassName)}
      />
      <Button
        type="submit"
        variant="secondary"
        className="rounded-l-none bg-arx-primary"
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
