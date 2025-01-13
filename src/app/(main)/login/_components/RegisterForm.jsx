"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { approveTokens, registerUser, getUserInfo } from "@/utils/contractInteractions";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { ethers } from 'ethers';

const RegisterForm = ({ walletAddress, referredBy }) => {
  const { fetchUser } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!walletAddress) return toast.error("Please connect wallet");

    // setIsLoading(true);
    try {

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const approvalAmount =  ethers.utils.parseEther("100000000000000000000000000000000000" )
      console.log(approvalAmount)
      //  let approveResult =await approveTokens(signer, approvalAmount);
      // console.log("approveResult" , approveResult)

      const {fullName , referredBy} = data
      console.log("Referrer" , fullName , referredBy)
      
      // // // 3. Register
      // const referrerInfo = await getUserInfo(data.referredBy);
      // console.log(referrerInfo)
      // const tx = await registerUser(signer, referrerInfo.userId, referrerInfo.referrerAddress, data.fullName);

      // // 4. Check confirmation
      // const receipt = await tx.wait();

      // // 5. Backend confirmation from TXN
      // const backendConfirmation = await axiosInstance.post("/users/confirm-registration", {
      //   txHash: receipt.transactionHash,
      //   walletAddress,
      //   fullName: data.fullName,
      //   referredBy: data.referredBy,
      // });

      // // 6. Registration in the backend
      // if (backendConfirmation.data.success) {
      //   const response = await axiosInstance.post("/users/connect-wallet", {
      //     ...data,
      //     walletAddress,
      //   });

      //   if (response?.data?.success) {
      //     Cookies.set("arx_auth_token", response.data?.data?.token);
      //     Cookies.set("arx_own_id", response.data?.data?.user?.userId);
      //     reset();
      //     await fetchUser();
      //     router.push("/dashboard");
      //     toast.success(response.data.message);
      //   } else {
      //     toast.error(response.data.message);
      //   }
      // } else {
      //   toast.error("Backend confirmation failed");
      // }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    } finally {
      // 7. Remove loader
      // setIsLoading(false);
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
          defaultValue={referredBy}
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
      <Button disabled={isLoading || isSubmitting} type="submit" className="w-full">
        {isLoading || isSubmitting ? (
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

