/** @format */

import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// 1. Setup Wagmi Configuration
const config = getDefaultConfig({
  appName: "Radikal Web3 Store",
  projectId: "YOUR_PROJECT_ID", // In production, you get this free from cloud.walletconnect.com
  chains: [mainnet, polygon],
  ssr: false, // We are building a Vite SPA, not Server-Side Rendered
});

// 2. Setup React Query (Required by Wagmi v2)
const queryClient = new QueryClient();

export default function Web3Provider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
