"use client";

import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const router = useRouter();

  //  Fetch logged-in user details
  const fetchUser = async () => {
    const userId = Cookies.get("arx_user_id");
    if (!userId) {
      setLoggedInUser(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.get(`/users/user/${userId}`);
      if (response?.data?.success) {
        setLoggedInUser(response.data.data);
      } else {
        setLoggedInUser(null);
      }
    } catch (error) {
      setLoggedInUser(null);
      console.log("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };

  //  Clear cookies and log out the user.
  const handleLogout = () => {
    try {
      Cookies.remove("arx_user_id");
      Cookies.remove("arx_auth_token");
      setLoggedInUser(null);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Automatically fetch user
  useEffect(() => {
    fetchUser();
  }, []);

  const authInfo = {
    loading,
    loggedInUser,
    fetchUser,
    setLoggedInUser,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
