import { fetchGenerations } from "@/api/generation";
import { useQuery } from "@tanstack/react-query";

export const useGenerations = () => {
  return useQuery({
    queryKey: ["generations"],
    queryFn: fetchGenerations,
    retry: 2,
  });
};
