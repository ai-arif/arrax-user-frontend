"use client";

import { AuthContext } from "@/contexts/AuthProvider";
import { cn } from "@/lib/utils";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const UserSearch = ({ className }) => {
  const { fetchOtherUser } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.get(`/users/user/${data.userId}`);

      if (response?.data?.success) {
        Cookies.set("arx_user_id", response.data?.data?.userId);
        reset();
        await fetchOtherUser();
        router.push("/dashboard");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("flex", className)}>
      <Input
        {...register("userId")}
        type="search"
        placeholder="Enter User ID"
        className="h-8 rounded-r-none"
        required
      />
      <Button
        disabled={isSubmitting}
        type="submit"
        className="rounded-l-none"
        size="sm"
      >
        <span className="hidden lg:block">Search</span> <LuSearch />
      </Button>
    </form>
  );
};

export default UserSearch;
