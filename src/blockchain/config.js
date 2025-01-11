import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { polygon } from "@reown/appkit/networks";

import { createAppKit } from "@reown/appkit/react";
import { QueryClient } from "@tanstack/react-query";
import { defineChain } from "@reown/appkit/networks";

// 1. Get projectId from https://cloud.reown.com
const projectId = "f37a44911258a7a7ec9131f91a1b9204";
// Define the Holesky network
const holesky = defineChain({
  id: 17000,
  caipNetworkId: "eip155:17000",
  chainNamespace: "eip155",
  name: "Holesky",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://1rpc.io/holesky"],
      webSocket: ["wss://ethereum-holesky-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "holeskyscan",
      url: "https://holesky.etherscan.io/",
    },
  },
  contracts: {
    // Add the contracts here
  },
});

// 2. Create a metadata object - optional
const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://example.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Set the networks
const networks = [holesky];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 0. Setup queryClient
const queryClient = new QueryClient();

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export { wagmiAdapter, queryClient };
