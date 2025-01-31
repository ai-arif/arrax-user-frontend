import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { programs } from "../../../public/data/arraxProgram";

const ArraxPrograms = ({ userId }) => {
  return (
    <div>
      <h2 className="mb-3 text-base text-gray-200 md:mb-4 md:text-lg">
        Arrax Program
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {/* cards */}
        {programs?.map((program) => (
          <div key={program.id} className="flex h-full flex-col">
            <p className="pb-2 text-lg font-semibold md:pb-3 md:text-xl">
              {program.programName}
            </p>
            <div className="flex h-full flex-col rounded-lg bg-[#141414] p-4 md:p-5">
              {/* title */}
              <p>{program.title}</p>
              {/* slots box */}
              {program.published ? (
                <div className="flex flex-wrap gap-3 py-5 md:gap-5 md:py-6">
                  {[...Array(program.slots)].map((_, boxIndex) => (
                    <div
                      key={boxIndex}
                      className="size-8 rounded-sm bg-purple-600"
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full items-center justify-center text-gray-200">
                  Coming soon.
                </div>
              )}
              {/* button */}
              {program.published && (
                <Button
                  variant="secondary"
                  className="rounded-full bg-purple-600"
                  asChild
                >
                  <Link href={`/dashboard/matrix/${userId}`}>
                    Preview <FaArrowRight />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArraxPrograms;
