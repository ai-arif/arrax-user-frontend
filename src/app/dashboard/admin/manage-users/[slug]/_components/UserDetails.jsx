"use client";

import React from "react";
import PurchasedSlots from "./PurchasedSlots";
import PurchaseInformation from "./PurchaseInformation";
import TransactionHistory from "./TransactionHistory";

const UserDetails = () => {
  return (
    <div>
      {/* Purchase information */}
      <PurchaseInformation />

      {/* Purchased slots */}
      <PurchasedSlots />

      {/* Transaction history */}
      <TransactionHistory />
    </div>
  );
};

export default UserDetails;
