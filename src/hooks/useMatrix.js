import { fetchMatrix } from "@/api/matrix";
import { useQuery } from "@tanstack/react-query";

export const useMatrix = () => {
  return useQuery({
    queryKey: ["matrix"],
    queryFn: fetchMatrix,
    retry: 2,
  });
};
