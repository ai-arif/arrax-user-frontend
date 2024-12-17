export const fetchGenerations = async (userId) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/users/user/${userId}/generations`,
      {
        cache: "no-cache",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch generations");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching generations:", err);
    throw new Error("Failed to fetch generations");
  }
};
