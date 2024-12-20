"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

const RegisterForm = ({ walletAddress }) => {
  const { fetchUser } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!walletAddress) return toast.error("Please connect wallet");

    try {
      const response = await axiosInstance.post("/users/connect-wallet", {
        ...data,
        walletAddress,
      });
      if (response?.data?.success) {
        Cookies.set("arx_auth_token", response.data?.data?.token);
        Cookies.set("arx_own_id", response.data?.data?.user?.userId);
        reset();
        await fetchUser();
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-5">
      <div>
        <Label htmlFor="inviter-id" className="sr-only">
          Inviter ID
        </Label>
        <Input
          {...register("referredBy", {
            required: "Inviter ID is required",
          })}
          id="inviter-id"
          type="text"
          placeholder="Enter Inviter ID"
        />
        <ErrorMessage>{errors.referredBy?.message}</ErrorMessage>
      </div>
      <div>
        <Label htmlFor="full-name" className="sr-only">
          Full Name
        </Label>
        <Input
          {...register("fullName", { required: "Full name is required" })}
          id="full-name"
          type="text"
          placeholder="Enter Full Name"
        />
        <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
      </div>
      <Button disabled={isSubmitting} type="submit" className="w-full">
        {isSubmitting ? (
          <>
            <LuLoader2 className="mr-1 inline animate-spin-fast text-lg" />
            <span className="text-base">Please Wait</span>
          </>
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
