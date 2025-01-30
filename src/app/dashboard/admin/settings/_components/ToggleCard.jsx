"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input"; // Import Input component
import { Button } from "@/components/ui/button"; // Import Button component
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";

const ToggleCard = ({ settings, refetch }) => {
  const [isSlotPurchaseEnabled, setIsSlotPurchaseEnabled] = useState(false);
  const [isRegistrationEnabled, setIsRegistrationEnabled] = useState(false);
  const [fees, setFees] = useState(""); // State for fee input
  const [isUpdatingPurchase, setIsUpdatingPurchase] = useState(false);
  const [isUpdatingRegistration, setIsUpdatingRegistration] = useState(false);
  const [isUpdatingFees, setIsUpdatingFees] = useState(false); // State for fee update button

  useEffect(() => {
    if (settings) {
      setIsRegistrationEnabled(settings.isRegistrationPaused);
      setIsSlotPurchaseEnabled(settings.isPurchasingPaused);
      setFees(settings.fees); // Initialize fees
    }
  }, [settings]);

  const updateRegistration = async () => {
    if (isUpdatingRegistration) return;

    setIsUpdatingRegistration(true);
    try {
      const response = await axiosInstance.put("/admin/update-registration", {
        registration: !isRegistrationEnabled,
      });

      if (response.status === 200) {
        setIsRegistrationEnabled(!isRegistrationEnabled);
        refetch();
        toast.success("Registration status updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update registration status");
    } finally {
      setIsUpdatingRegistration(false);
    }
  };

  const updatePurchasing = async () => {
    if (isUpdatingPurchase) return;

    setIsUpdatingPurchase(true);
    try {
      const response = await axiosInstance.put("/admin/update-purchasing", {
        purchasing: !isSlotPurchaseEnabled,
      });

      if (response.status === 200) {
        setIsSlotPurchaseEnabled(!isSlotPurchaseEnabled);
        refetch();
        toast.success("Purchasing status updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update purchasing status");
    } finally {
      setIsUpdatingPurchase(false);
    }
  };

  const updateFees = async () => {
    if (isUpdatingFees) return;

    setIsUpdatingFees(true);
    try {
      const response = await axiosInstance.put("/admin/update-fees", {
        fees: fees, // Send updated fees
      });

      if (response.status === 200) {
        refetch();
        toast.success("Fees updated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update fees");
    } finally {
      setIsUpdatingFees(false);
    }
  };

  return (
    <div className="mx-auto w-max min-w-fit space-y-5 rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-6 shadow-lg shadow-purple-600 md:space-y-6 md:p-8">
      {/* Slot Purchase Toggle */}
      <div className="flex items-center justify-between gap-5 md:gap-10">
        <Label className="text-base font-medium md:text-lg">
          Slot Purchase
        </Label>
        <Switch
          checked={isSlotPurchaseEnabled}
          onCheckedChange={updatePurchasing}
          disabled={isUpdatingPurchase}
        />
      </div>

      {/* Registration Toggle */}
      <div className="flex items-center justify-between gap-5 md:gap-10">
        <Label className="text-base font-medium md:text-lg">Registration</Label>
        <Switch
          checked={isRegistrationEnabled}
          onCheckedChange={updateRegistration}
          disabled={isUpdatingRegistration}
        />
      </div>

      {/* Fees Input Field */}
      <div className="flex flex-col space-y-2">
        <Label className="text-base font-medium md:text-lg">Fees</Label>
        <Input
          type="text"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
        <Button
          onClick={updateFees}
          disabled={isUpdatingFees}
          className="mt-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {isUpdatingFees ? "Updating..." : "Update Fees"}
        </Button>
      </div>
    </div>
  );
};

export default ToggleCard;
