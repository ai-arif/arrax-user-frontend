"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import React, { useEffect } from "react";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-4 lg:mb-6">
        <Logo />
      </div>
      <div className="mx-auto max-w-[320px] rounded-lg border border-arx-black-4 bg-arx-black-5 p-5 text-center shadow-2xl sm:max-w-sm md:max-w-lg md:p-10">
        <h1 className="mb-4 text-xl font-extrabold text-red-400 md:text-3xl lg:mb-5">
          Oops! Something went wrong.
        </h1>
        <p className="mb-4 text-xs text-zinc-300 md:text-sm lg:mb-6">
          We&apos;re sorry, but the page you&apos;re looking for can&apos;t be
          found or an unexpected error has occurred.
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <Button variant="outline" onClick={() => reset()}>
            Try Again
          </Button>
          <Button asChild>
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
