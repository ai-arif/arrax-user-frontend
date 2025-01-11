import { useWriteContract } from "wagmi";
import { tokenAbi } from "../abis/abi";
import { useNetworkData } from "./useNetworkData";
import { wagmiAdapter } from "../config";

export const useProPlanWrite = (functionName, options) => {
  const { token } = useNetworkData();
  const { writeContractAsync, ...rest } = useWriteContract({
    config: wagmiAdapter.wagmiConfig,
    mutation: {
      onError: (e) => {
        console.log(e);
      },
      onSuccess: () => {
        console.log("success");
      },
    },
    ...options,
  });

  const write = async (params) => {
    return writeContractAsync({
      abi: tokenAbi,
      address: token,
      functionName,
      args: params,
    });
  };
  return {
    write,
    ...rest,
  };
};
