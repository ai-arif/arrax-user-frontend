import { useReadContract, useWriteContract } from "wagmi";
import { tokenAbi } from "../abis/abi";
import { useNetworkData } from "./useNetworkData";
import { config } from "../config";

export const useTokenRead = (functionName, args, options) => {
  const { token } = useNetworkData();
  const result = useReadContract({
    abi: tokenAbi,
    address: token,
    functionName,
    args,
    ...options,
  });
  return result;
};

export const useTokenWrite = (functionName, options) => {
  const { token } = useNetworkData();
  const { writeContractAsync, writeContract, ...rest } = useWriteContract({
    config: config,
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
