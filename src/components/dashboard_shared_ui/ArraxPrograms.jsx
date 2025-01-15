import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { programs } from "../../../public/data/arraxProgram";

const ArraxPrograms = () => {
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
            <div className="flex h-full flex-col rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-4 shadow-lg shadow-purple-600 md:p-5">
              {/* title & button */}
              <div className="flex items-center justify-between gap-2 pb-4 md:pb-5">
                <p className="">{program.title}</p>
                {program.published && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/dashboard/matrix">
                      Preview <BsArrowUpRightCircleFill />
                    </Link>
                  </Button>
                )}
              </div>
              {/* slots box */}
              {program.published ? (
                <div className="grid grid-cols-5 justify-items-center gap-5 md:gap-6">
                  {[...Array(program.slots)].map((_, boxIndex) => (
                    <div
                      key={boxIndex}
                      className="size-6 rounded-sm bg-white"
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center text-gray-200">
                  Coming soon.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArraxPrograms;
