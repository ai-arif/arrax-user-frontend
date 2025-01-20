"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";

const ToggleCard = ({ settings, refetch }) => {
  const [isSlotPurchaseEnabled, setIsSlotPurchaseEnabled] = useState(false);
  const [isRegistrationEnabled, setIsRegistrationEnabled] = useState(false);

  useEffect(() => {
    if (settings) {
      setIsRegistrationEnabled(settings.isRegistrationPaused);
      setIsSlotPurchaseEnabled(settings.isPurchasingPaused);
    }
    console.log(settings)
  }, [settings]);

  const updateRegistration = async () => {
    try {
      const response = await axiosInstance.put("/admin/update-registration", {
        registration: !isRegistrationEnabled,
      });
      if (response.status === 200) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsRegistrationEnabled(!isRegistrationEnabled);
    }
  };

  const updatePurchasing = async () => {
    try {
      const response = await axiosInstance.put("/admin/update-purchasing", {
        purchasing: !isSlotPurchaseEnabled,
      });
      if (response.status === 200) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSlotPurchaseEnabled(!isSlotPurchaseEnabled);
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
          onCheckedChange={() => updatePurchasing()}
        />
      </div>

      {/* Registration Toggle */}
      <div className="flex items-center justify-between gap-5 md:gap-10">
        <Label className="text-base font-medium md:text-lg">Registration</Label>
        <Switch
          checked={isRegistrationEnabled}
          onCheckedChange={() => updateRegistration()}
        />
      </div>
    </div>
  );
};

export default ToggleCard;
