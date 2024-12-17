"use client";
import React from "react";
import RegisterForm from "./RegisterForm";
import { WalletConnect } from "@/components/walletconnect/WalletConnect";

const AuthButtons = () => {
  return (
    <>
      <div className="mb-3 md:mb-5">
        {/* <Button variant="secondary" className="w-full">
                <FaWallet /> Connect Wallet
              </Button> */}
        <div>
          <WalletConnect />
        </div>
      </div>
      <RegisterForm />
    </>
  );
};

export default AuthButtons;
