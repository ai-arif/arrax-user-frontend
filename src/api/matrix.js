import axiosInstance from "@/utils/axiosInstance";

export const fetchMatrix = async (userId) => {
  try {
    const response = await axiosInstance.get(`/users/user/${userId}/slot`);
    return response.data;
  } catch (error) {
    console.error("Error fetching generations:", error);
    throw new Error(
      error?.response?.data?.message || "Failed to fetch generations",
    );
  }
};
