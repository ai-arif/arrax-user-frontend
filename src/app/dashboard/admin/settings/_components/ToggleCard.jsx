"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast"; // Assuming you're using a toast library for notifications

const ToggleCard = ({ settings, refetch }) => {
  const [isSlotPurchaseEnabled, setIsSlotPurchaseEnabled] = useState(false);
  const [isRegistrationEnabled, setIsRegistrationEnabled] = useState(false);
  const [isUpdatingPurchase, setIsUpdatingPurchase] = useState(false);
  const [isUpdatingRegistration, setIsUpdatingRegistration] = useState(false);

  useEffect(() => {
    if (settings) {
      setIsRegistrationEnabled(settings.isRegistrationPaused);
      setIsSlotPurchaseEnabled(settings.isPurchasingPaused);
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
    </div>
  );
};

export default ToggleCard;
