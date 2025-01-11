import { fetchAllUsers } from "@/api/admin/user";
import { useQuery } from "@tanstack/react-query";

export const useAllUsers = ({ currentPage, limit, search }) => {
  return useQuery({
    queryKey: ["users", { currentPage, limit, search }],
    queryFn: () => fetchAllUsers({ currentPage, limit, search }),
    retry: 2,
  });
};
