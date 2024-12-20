"use client";

import { Button } from "@/components/ui/button";
import { formatAddress } from "@/utils/format-address";
import { ConnectKitButton } from "connectkit";
import { FaWallet } from "react-icons/fa6";

export const WalletConnect = ({ setWalletAddress }) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        if (isConnected && address) {
          setWalletAddress(address);
        }

        return (
          <Button variant="secondary" onClick={() => show()} className="w-full">
            <FaWallet />{" "}
            {isConnected ? formatAddress(address) : "Connect Wallet"}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
