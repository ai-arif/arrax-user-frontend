export const fetchMatrix = async (ownId) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/users/user/${ownId}/slot`,
      {
        cache: "no-cache",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch matrix");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching matrix:", err);
    throw new Error("Failed to fetch matrix");
  }
};
