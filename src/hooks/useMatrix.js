import { fetchMatrix } from "@/api/matrix";
import { useQuery } from "@tanstack/react-query";

export const useMatrix = (userId) => {
  return useQuery({
    queryKey: ["matrix"],
    queryFn: () => fetchMatrix(userId),
    retry: 2,
  });
};
