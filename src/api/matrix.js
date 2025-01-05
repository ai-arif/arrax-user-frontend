import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";

export const fetchMatrix = async () => {
  const ownId = Cookies.get("arx_own_id");
  try {
    const response = await axiosInstance.get(`/users/user/${ownId}/slot`);
    return response.data;
  } catch (error) {
    console.error("Error fetching generations:", error);
    throw new Error(
      error?.response?.data?.message || "Failed to fetch generations",
    );
  }
};
