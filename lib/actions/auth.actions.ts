"use client";

export const logout = async () => {
  try {
    // Clear the access key from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessKey");
    }
    return { success: true };
  } catch (error) {
    console.error("Error during logout:", error);
    return { success: false };
  }
};
