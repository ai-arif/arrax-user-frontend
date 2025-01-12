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
        className={cn(
          "rounded-r-none bg-arx-black-5 placeholder:text-zinc-400",
          inputClassName,
        )}
      />
      <Button className="rounded-l-none" type="submit">
        Search
      </Button>
    </form>
  );
};

export default Search;
