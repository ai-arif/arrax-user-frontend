import { fetchAllUsers, fetchUserDetails } from "@/api/admin/user";
import { useQuery } from "@tanstack/react-query";

// all users
export const useAllUsers = ({ currentPage, limit, search }) => {
  return useQuery({
    queryKey: ["users", { currentPage, limit, search }],
    queryFn: () => fetchAllUsers({ currentPage, limit, search }),
    retry: 2,
  });
};

// user details
export const useUserDetails = (userId) => {
  return useQuery({
    queryKey: ["userDetails"],
    queryFn: () => fetchUserDetails(userId),
    retry: 2,
  });
};
