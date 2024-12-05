"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { z } from "zod";

// register schema
export const loginSchema = z.object({
  walletAddress: z.string().trim().min(1, "Wallet address is required"),
});

const AutomaticLoginForm = () => {
  const { fetchUser } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/connect-wallet", data);
      if (response?.data?.success) {
        Cookies.set("arx_auth_token", response.data?.data?.token);
        Cookies.set("arx_user_id", response.data?.data?.user?.userId);
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
        <Label htmlFor="wallet-address" className="sr-only">
          Wallet Address
        </Label>
        <Input
          {...register("walletAddress")}
          id="wallet-address"
          type="text"
          placeholder="Enter Wallet Address"
        />
        <ErrorMessage>{errors.walletAddress?.message}</ErrorMessage>
      </div>
      <Button disabled={isSubmitting} type="submit" className="w-full">
        {isSubmitting ? (
          <>
            <LuLoader2 className="animate-spin-fast mr-1 inline text-lg" />
            <span className="text-base">Please Wait</span>
          </>
        ) : (
          "Automatic Login"
        )}
      </Button>
    </form>
  );
};

export default AutomaticLoginForm;
