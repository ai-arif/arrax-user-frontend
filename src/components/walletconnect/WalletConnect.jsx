"use client";

import { Button } from "@/components/ui/button";
import { formatAddress } from "@/utils/format-address";
import { FaWallet } from "react-icons/fa6";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";

export const WalletConnect = ({ setWalletAddress }) => {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  useEffect(() => {
    if (isConnected && address) {
      setWalletAddress(address);
    }
  }, [isConnected, address, setWalletAddress]);

  return (
    <Button
      variant="secondary"
      onClick={!isConnected ? () => open("Connect") : () => open("Account")}
      className="w-full"
    >
      <FaWallet /> {isConnected ? formatAddress(address) : "Connect Wallet"}
    </Button>
  );
};
