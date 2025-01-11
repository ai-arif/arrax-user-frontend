import axiosInstance from "@/utils/axiosInstance";

export const fetchAllUsers = async ({ currentPage, limit, search }) => {
  try {
    const response = await axiosInstance.get(
      `/admin/users?page=${currentPage}&limit=${limit}&fullName=${search}`,
    );
    return response.data?.data;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw new Error(
      error?.response?.data?.message || "Failed to fetch all users",
    );
  }
};
