import { Button } from "@/components/ui/button";
import React from "react";
import { ethers } from "ethers";
import { FaRotate, FaUsers } from "react-icons/fa6";
import matrixProAbi from "../../../ABI/matrixpro.json";
import tokenABI from "../../../ABI/token.json";
const matrixProContractAddress =
  process.env.NEXT_PUBLIC_MATRIX_CONTRACT_ADDRESS;
const tokenContractAddress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
// SubSlots Component
export const SubSlots = ({ subSlots, start, end }) => {
  return (
    <div className="flex flex-wrap justify-around gap-2">
      {subSlots?.slice(start, end)?.map((item) => (
        <div
          key={item?._id}
          className={`size-6 rounded-sm ${
            item?.isPurchased ? "bg-arx-primary" : "bg-white"
          }`}
        ></div>
      ))}
    </div>
  );
};

// Slot Card Component
const SlotCard = ({ slot }) => {
  const purchaseSlot = async () => {
    console.log("purchaseSlot", matrixProContractAddress, matrixProAbi);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const walletAddress = await signer.getAddress();
      const contract = new ethers.Contract(
        matrixProContractAddress,
        matrixProAbi,
        signer,
      );

      console.log(walletAddress);
      const approvalAmount = ethers.utils.parseEther(
        "10000000000000000000000000000000000000",
      );
    
      const tokenContract = new ethers.Contract(
        tokenContractAddress,
        tokenABI,
        signer,
      );
      const tokenApprove = await tokenContract.approve(
        matrixProContractAddress,
        approvalAmount,
      );
      const approveSigner = await tokenContract.approve(
        walletAddress,
        approvalAmount,
      );
      console.log(
        "Approval Result:",
        approveSigner,
        tokenApprove,
        walletAddress,
      );

      // console.log("data**************", data);
      const bnbFee = ethers.utils.parseEther("0.003");
      console.log("walletAddress", walletAddress, bnbFee);
      const tx = await contract.purchaseSlot(1, {
        value: bnbFee._hex,
      });
      console.log(tx);
      const receipt = await tx.wait();

      return {
        success: true,
        data: {
          transactionHash: receipt.hash,
          // slotLevel,
          receipt,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error: `Slot purchase failed: ${error.message}`,
      };
    }
  };

  return (
    <div className="space-y-5 rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-4 shadow-lg shadow-purple-600 md:space-y-7 md:p-5">
      {/* Slot name and price */}
      <div className="flex items-center justify-between gap-2">
        <h5 className="text-xl font-semibold text-gray-200 md:text-2xl">
          Slot {slot?.slotNumber}
        </h5>
        <p className="text-lg font-medium text-orange-400 md:text-xl">
          ${slot?.price}
        </p>
      </div>

      {slot?.isActive ? (
        <>
          {/* Active Slots */}
          <div className="flex flex-col gap-3">
            <SubSlots subSlots={slot?.subSlots} start={0} end={3} />
            <SubSlots subSlots={slot?.subSlots} start={3} />
          </div>
          {/* Recycle Count */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <FaUsers />
              <span>{slot?.recycleUserCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRotate />
              <span>{slot?.recycleCount}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Button
            variant="secondary"
            className="rounded-full bg-arx-primary uppercase"
            onClick={purchaseSlot}
          >
            Upgrade
          </Button>
        </div>
      )}
    </div>
  );
};

export default SlotCard;
