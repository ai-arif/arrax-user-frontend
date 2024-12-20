"use client";

import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [otherUser, setOtherUser] = useState(null);
  const router = useRouter();

  //  Fetch logged-in user details
  const fetchUser = async () => {
    const ownId = Cookies.get("arx_own_id");

    if (!ownId) {
      setLoggedInUser(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.get(`/users/user/${ownId}`);
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

  //  Fetch other user details
  const fetchOtherUser = async () => {
    const userId = Cookies.get("arx_user_id");

    if (!userId) {
      setOtherUser(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.get(`/users/user/${userId}`);
      if (response?.data?.success) {
        setOtherUser(response.data.data);
      } else {
        setOtherUser(null);
      }
    } catch (error) {
      setOtherUser(null);
      console.log("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };

  //  Clear cookies and log out the user.
  const handleLogout = () => {
    try {
      Cookies.remove("arx_auth_token");
      Cookies.remove("arx_own_id");
      Cookies.remove("arx_user_id");
      setLoggedInUser(null);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Automatically fetch user
  useEffect(() => {
    fetchUser();
    fetchOtherUser();
  }, []);

  const authInfo = {
    loading,
    loggedInUser,
    fetchUser,
    otherUser,
    fetchOtherUser,
    setLoggedInUser,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
