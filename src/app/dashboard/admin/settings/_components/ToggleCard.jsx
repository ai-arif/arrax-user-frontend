"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const ToggleCard = () => {
  const [isSlotPurchaseEnabled, setIsSlotPurchaseEnabled] = useState(false);
  const [isRegistrationEnabled, setIsRegistrationEnabled] = useState(false);

  return (
    <div className="mx-auto w-max min-w-fit space-y-5 rounded-lg border border-purple-600 bg-gradient-to-r from-purple-600 p-6 shadow-lg shadow-purple-600 md:space-y-6 md:p-8">
      {/* Slot Purchase Toggle */}
      <div className="flex items-center justify-between gap-5 md:gap-10">
        <Label className="text-base font-medium md:text-lg">
          Slot Purchase
        </Label>
        <Switch
          checked={isSlotPurchaseEnabled}
          onCheckedChange={setIsSlotPurchaseEnabled}
        />
      </div>

      {/* Registration Toggle */}
      <div className="flex items-center justify-between gap-5 md:gap-10">
        <Label className="text-base font-medium md:text-lg">Registration</Label>
        <Switch
          checked={isRegistrationEnabled}
          onCheckedChange={setIsRegistrationEnabled}
        />
      </div>
    </div>
  );
};

export default ToggleCard;
