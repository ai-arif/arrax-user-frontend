

"use client";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthProvider";
import axiosInstance from "@/utils/axiosInstance";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";
import { ethers } from "ethers";
import { useRegistration } from "@/hooks/useRegistration";
import registrationABI from '../../../../../ABI/registration.json'
import tokenABI from '../../../../../ABI/token.json';
import { approveTokens } from "@/utils/contractInteractions";

const registrationContractAddress = process.env.NEXT_PUBLIC_REGISTRATION_CONTRACT_ADDRESS;
const tokenContractAddress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;


const RegisterForm = ({ walletAddress, referredBy }) => {
  const { fetchUser } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {getUserById , registerUser } = useRegistration()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!walletAddress) {
      return toast.error("Please connect your wallet before registering.");
    }

    setIsLoading(true);
    try {


      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      const walletAddress = await signer.getAddress();
      const contract =new ethers.Contract(registrationContractAddress, registrationABI, signer);
      console.log("Approval Amount:",registrationContractAddress);
      console.log("***************",walletAddress , registrationContractAddress)
      const approvalAmount = ethers.utils.parseEther("10000000000000000000000000000000000000");
      const tokenContract = new ethers.Contract(tokenContractAddress, tokenABI, signer);
      const tokenApprove = await tokenContract.approve(registrationContractAddress, approvalAmount);
      tokenApprove.wait()
      console.log("**************" , tokenApprove)
      const {fullName , referredBy} = data
    
       const referrerInfo = await contract.getUserByReferrerId(referredBy);
      console.log("Referrer Info:", referredBy, referrerInfo[0], fullName.toString());

      const gasEstimate = await contract.estimateGas.registerUser(
        referredBy,
        referrerInfo[0],
        fullName.toString()
      );
      console.log("Gas Estimate:", gasEstimate.toString());

      const tx = await contract.registerUser(
        referredBy, referrerInfo[0], fullName.toString(),
        { gasLimit: gasEstimate.mul(3) } 
      );
      const receipt = await tx.wait();
      console.log("Transaction Receipt:", receipt);
      toast.success("Register Successfull");

  //     if(receipt){

  //       console.log("Send Confirmation")
  //  // Step 5: Confirm registration on the backend
  //     // const backendConfirmation = await axiosInstance.post(
  //     //   "/users/confirm-registration",
  //     //   {
  //     //     txHash: receipt.transactionHash,
  //     //     walletAddress,
  //     //     fullName: data.fullName,
  //     //     referredBy: data.referredBy,
  //     //   }
  //     // );
  //     }

   

      // if (backendConfirmation.data.success) {
      //   console.log("if backend confirmation is done")
        // backend data store



        // Step 6: Finalize registration and save cookies
        // const response = await axiosInstance.post("/users/connect-wallet", {
        //   ...data,
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
      // } else {
      //   toast.error("Backend confirmation failed.");
      // }
    } catch (error) {
      console.error("Error during registration:", error);
      // toast.error(
      //   error?.response?.data?.message || "An unexpected error occurred."
      // );
    } finally {
      setIsLoading(false);
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
            required: "Inviter ID is required.",
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
          {...register("fullName", { required: "Full name is required." })}
          id="full-name"
          type="text"
          placeholder="Enter Full Name"
        />
        <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
      </div>
      <Button
        disabled={isLoading || isSubmitting}
        type="submit"
        className="w-full"
      >
        {isLoading || isSubmitting ? (
          <>
            <LuLoader2 className="mr-1 inline animate-spin-fast text-lg" />
            <span className="text-base">Processing...</span>
          </>
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
