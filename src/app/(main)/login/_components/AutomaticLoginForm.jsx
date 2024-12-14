"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

const AutomaticLoginForm = () => {
  const { fetchUser } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.get(`/users/user/${data.userId}`);
      if (response?.data?.success) {
        Cookies.set("arx_user_id", response.data?.data?.userId);
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
    <div>
      <h2 className="text-custom-style mb-4 text-lg font-semibold md:mb-5 md:text-2xl md:font-bold">
        Login to Your Personal Account
      </h2>
      <p className="mb-4 text-xs md:mb-5 md:text-sm">
        Please connect the wallet before login.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div>
          {/* <Label htmlFor="user-id" className="sr-only">
          Enter User ID
        </Label> */}
          {/* <Input
          {...register("userId")}
          id="user-id"
          type="text"
          placeholder="Enter User ID"
        /> */}
          {/* <ErrorMessage>{errors.userId?.message}</ErrorMessage> */}
        </div>
        <Button disabled={isSubmitting} type="submit" className="w-full">
          {isSubmitting ? (
            <>
              <LuLoader2 className="mr-1 inline animate-spin-fast text-lg" />
              <span className="text-base">Please Wait</span>
            </>
          ) : (
            "Automatic Login"
          )}
        </Button>
      </form>
      <p className="mt-4 text-xs md:text-sm">Already have an account?</p>
    </div>
  );
};

export default AutomaticLoginForm;
