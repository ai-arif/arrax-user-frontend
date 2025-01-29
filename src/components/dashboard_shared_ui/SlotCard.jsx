import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ethers } from "ethers";
import { FaRotate, FaUsers } from "react-icons/fa6";
import matrixProAbi from "../../../ABI/matrixpro.json";
import tokenABI from "../../../ABI/token.json";
import axiosInstance from "@/utils/axiosInstance";
const matrixProContractAddress =
  process.env.NEXT_PUBLIC_MATRIX_CONTRACT_ADDRESS;
const tokenContractAddress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
// SubSlots Component
export const SubSlots = ({ subSlots, start, end, referralCount }) => {
  return (
    <div className="flex flex-wrap justify-around gap-2">
      {subSlots?.slice(start, end)?.map((item, index) => (
        <div
          key={item?._id}
          className={`size-6 rounded-sm ${
            item?._id <= parseInt(referralCount) ? "bg-arx-primary" : "bg-white"
          }`}
        ></div>
      ))}
    </div>
  );
};

// Slot Card Component
const SlotCard = ({
  adminAccess = false,
  slot,
  isActive,
  index,
  showUpgrade,
  slotDetails,
  refetch,
  user,
}) => {
  const [loading, setLoading] = useState(false);
  const purchaseSlot = async (level) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    const matrixContract = new ethers.Contract(
      matrixProContractAddress,
      matrixProAbi,
      signer,
    );

    const tokenContract = new ethers.Contract(
      tokenContractAddress,
      tokenABI,
      signer,
    );

    try {
      // Get slot price
      const price = await matrixContract.slotPrices(level - 1);
      const bscAmount = await matrixContract.BSC_FEE();
      const totalAmount = price.add(bscAmount);

      // Approve tokens
      const approveTx = await tokenContract.approve(
        matrixProContractAddress,
        totalAmount,
      );
      await approveTx.wait();

      // Purchase slot
      console.log("bscAmount", bscAmount);
      const purchaseTx = await matrixContract.purchaseSlot(level, {
        value: bscAmount,
      });
      const receipt = await purchaseTx.wait();

      return {
        success: true,
        hash: receipt.transactionHash,
      };
    } catch (error) {
      console.log(error.message);
      return {
        success: false,
        error: error.message,
      };
    }
  };

  const handleUpgradeByAdmin = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/admin/upgrade-user-slot", {
        userAddress: user?.walletAddress,
        level: index + 1,
      });
      console.log(res.data);
      setLoading(false);

      refetch();
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5 rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-4 shadow-lg shadow-purple-600 md:space-y-7 md:p-5">
      {/* Slot name and price */}
      <div className="flex items-center justify-between gap-2">
        <h5 className="text-xl font-semibold text-gray-200 md:text-2xl">
          Slot {index + 1}
        </h5>
        <p className="text-lg font-medium text-orange-400 md:text-xl">
          ${slot?.price}
        </p>
      </div>

      {isActive ? (
        <>
          {/* Active Slots */}
          <div className="flex flex-col gap-3">
            <SubSlots
              referralCount={slotDetails ? slotDetails?.data?.referralCount : 0}
              subSlots={slot?.subSlots}
              start={0}
              end={3}
            />
            <SubSlots
              referralCount={slotDetails ? slotDetails?.data?.referralCount : 0}
              subSlots={slot?.subSlots}
              start={3}
            />
          </div>
          {/* Recycle Count */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <FaUsers />
              <span>{slotDetails ? slotDetails?.data?.referralCount : 0}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRotate />
              <span>{slotDetails ? slotDetails?.data?.recycleCount : 0}</span>
            </div>
          </div>
        </>
      ) : showUpgrade ? (
        <div className="flex flex-col items-center justify-center">
          {adminAccess ? (
            <Button
              disabled={loading}
              size="sm"
              variant="outline"
              onClick={() => handleUpgradeByAdmin()}
            >
              {loading ? (
                <span className="animate-spin">Upgrading...</span>
              ) : (
                "Upgrade"
              )}
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="rounded-full bg-arx-primary uppercase"
              onClick={() => {
                purchaseSlot(slot?.slotNumber);
              }}
            >
              Upgrade
            </Button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <svg
            fill="#d1d5db"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="64px"
            height="64px"
            viewBox="0 0 543.086 543.086"
            xmlSpace="preserve"
            stroke="#d1d5db"
          >
            <g>
              <path d="M371.873,315.686c2.521-29.395,3.85-55.362,3.997-77.896c-0.142-49.97-7.638-92.951-22.467-128.917 c-14.841-35.974-39.683-71.384-74.542-106.243c-1.817-1.818-4.094-2.693-6.823-2.625c-2.729,0.073-5.073,1.089-7.032,3.047 c-36.53,36.537-61.726,71.671-75.594,105.399c-13.855,33.74-20.851,76.855-20.992,129.34c0.141,22.546,1.475,48.507,3.99,77.896 c-99.731,0-43.88,220.252-43.88,220.252c1.126,4.486,4.205,6.867,9.241,7.143h26.873c2.521,0,4.755-0.979,6.713-2.944 c0.839-0.838,1.402-1.536,1.683-2.093l40.104-75.796l117.993-0.007l40.104,75.803c1.817,3.219,4.614,4.896,8.396,5.037 l26.879,0.006c2.791-0.281,5.037-1.261,6.714-2.943c1.261-1.262,2.099-2.656,2.521-4.199 C415.76,535.943,468.551,315.686,371.873,315.686z M292.295,309.559c-5.6,5.601-12.313,8.409-20.146,8.403 c-7.84,0-14.554-2.797-20.159-8.403c-5.606-5.605-8.403-12.319-8.403-20.159c-0.006-7.84,2.797-14.559,8.396-20.159 c5.601-5.594,12.32-8.396,20.159-8.396c7.84,0,14.554,2.797,20.159,8.403c5.601,5.6,8.397,12.32,8.403,20.16 C300.698,297.252,297.889,303.959,292.295,309.559z"></path>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default SlotCard;
