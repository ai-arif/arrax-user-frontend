"use client";

import { Button } from "@/components/ui/button";
import { ConnectKitButton } from "connectkit";
import { FaWallet } from "react-icons/fa6";

export const WalletConnect = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => (
        <Button variant="secondary" onClick={() => show()} className="w-full">
          <FaWallet /> {isConnected ? address : "Connect Wallet"}
        </Button>
      )}
    </ConnectKitButton.Custom>
  );
};
