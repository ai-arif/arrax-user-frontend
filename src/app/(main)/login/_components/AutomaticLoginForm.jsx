"use client";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";
import { ethers } from "ethers";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import registrationABI from '../../../../../ABI/registration.json'
import tokenABI from '../../../../../ABI/token.json';


const registrationContractAddress =
  process.env.NEXT_PUBLIC_REGISTRATION_CONTRACT_ADDRESS;
const tokenContractAddress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;

const AutomaticLoginForm = ({ walletAddress }) => {
  const { fetchUser } = useContext(AuthContext);
  const router = useRouter();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const walletAddress = await signer.getAddress();
    if (!walletAddress) return toast.error("Please connect wallet");

    // login
    const contract = new ethers.Contract(
      registrationContractAddress,
      registrationABI,
      signer,
    );

    const isUserExists = await contract.getUserInfo(walletAddress);
    if (isUserExists) {

      console.log("Working")
     toast.success("Successfully Logged In")

     
  /// check backend data for login 
    try {
      // const response = await axiosInstance.post("/users/connect-wallet", {
      //   walletAddress,
      // });

    

      // if (response?.data?.success) {
      //   Cookies.set("arx_auth_token", response.data?.data?.token);
      //   Cookies.set("arx_own_id", response.data?.data?.user?.userId);
      //   reset();
      //   await fetchUser();
      //   router.push("/dashboard");
      //   toast.success(response.data.message);
      // } else {
      //   toast.error(response.data.message);
      // }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred!",
      );
    }
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
        <div></div>
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
