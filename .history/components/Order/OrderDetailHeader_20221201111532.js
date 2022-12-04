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
      <div>
        <p>
          {new Date(createdAt).toLocaleString("en-GB", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p>
            {numberOfItems}{numberOfItems.length === 1 ? 'Item' : 'Items'} 
        </p>
      </div>
    </div>
  );
}
