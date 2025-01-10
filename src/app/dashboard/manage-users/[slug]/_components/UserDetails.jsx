"use client";

import React from "react";
import PurchasedSlots from "./PurchasedSlots";
import TransactionHistory from "./TransactionHistory";

const UserDetails = () => {
  return (
    <div>
      {/* Purchased slots */}
      <PurchasedSlots />

      {/* Transaction history */}
      <TransactionHistory />
    </div>
  );
};

export default UserDetails;
