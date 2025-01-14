"use client";
import React, { useState } from "react";
import AutomaticLoginForm from "./AutomaticLoginForm";
import RegisterForm from "./RegisterForm";
import { WalletConnect } from "@/components/walletconnect/WalletConnect";

const LoginRegisterComp = ({ referredBy }) => {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div className="mx-auto flex w-full flex-col rounded-lg border border-zinc-700 md:flex-row">
      {/* Registration Section */}
      <div className="w-full border-b border-zinc-700 p-6 md:w-1/2 md:border-r md:p-9">
        <h2 className="text-custom-style mb-4 text-lg font-semibold md:mb-5 md:text-2xl md:font-bold">
          Get Started with Arrax Space
        </h2>
        <p className="mb-4 text-xs md:mb-5 md:text-sm">
          Please check the inviter&apos;s ID before registering.
        </p>
        <div className="mb-3 md:mb-5">
          <WalletConnect setWalletAddress={setWalletAddress} />
        </div>
        <RegisterForm walletAddress={walletAddress} referredBy={referredBy} />
      </div>

      {/* Login part */}
      <div className="w-full p-6 md:w-1/2 md:p-9">
        <AutomaticLoginForm walletAddress={walletAddress} />
      </div>
    </div>
  );
};

export default LoginRegisterComp;

