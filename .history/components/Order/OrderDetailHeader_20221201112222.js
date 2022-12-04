import React from "react";

const styles = {
  orderId: "text-gray-50 text-sm font-semibold",
  date: "text-3xl font-semibold md:text-[3vw]",
  items: "font-semibold text-sm",
  wrapper: "",
};

export default function OrderDetailHeader({
  orderId,
  deliveryStatus,
  numberOfItems,
  createdAt,
  amount,
}) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.orderId}>
        Order: #{orderId} -- {deliveryStatus}
      </p>
      <div className="flex items-center w-full justify-between ">
        <p className={styles.date}>
          {new Date(createdAt).toLocaleString("en-GB", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className={styles.items}>
          {numberOfItems} {numberOfItems === 1 ? "Item" : "Items"} -- {amount}{" "}
          BHD
        </p>
      </div>
    </div>
  );
}
