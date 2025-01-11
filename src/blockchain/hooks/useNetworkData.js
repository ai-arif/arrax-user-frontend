import { useAccount } from "wagmi";
import { getNetwork } from "../networks/networks";

export const useNetworkData = () => {
  const { chain, chainId } = useAccount();
  console.log(chain, chainId);

  const neworkData = getNetwork(chainId);

  return neworkData;
};
