import React from "react";

const styles = {
  orderId: "text-gray-50",
};

export default function OrderDetailHeader({
  orderId,
  deliveryStatus,
  numberOfItems,
  createdAt,
  amount,
}) {
  return (
    <div>
      <p className={styles.orderId}>
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
          {numberOfItems} {numberOfItems.length === 1 ? "Item" : "Items"} --{" "}
          {amount} BHD
        </p>
      </div>
    </div>
  );
}
