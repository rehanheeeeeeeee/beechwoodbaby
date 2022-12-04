import React from "react";

export default function OrderDetailHeader({
  orderId,
  deliveryStatus,
  numberOfItems,
  createdAt,
  amount,
}) {
  return (
    <div>
      <p>
        Order: #{orderId} -- {deliveryStatus}
      </p>
    </div>
  );
}
