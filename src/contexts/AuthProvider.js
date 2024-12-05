"use client";

import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const router = useRouter();
  const userId = Cookies.get("arx_user_id");
  // const token = Cookies.get("arx_auth_token");

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/user/${userId}`);
      if (response?.data?.success) {
        setLoggedInUser(response?.data?.data);
      } else {
        setLoggedInUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setLoggedInUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  // Logout
  const handleLogout = async () => {
    try {
      Cookies.remove("arx_user_id");
      Cookies.remove("arx_auth_token");
      setLoggedInUser(null);
      toast.success("Logout Successfully");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const authInfo = {
    loading,
    fetchUser,
    loggedInUser,
    setLoggedInUser,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
