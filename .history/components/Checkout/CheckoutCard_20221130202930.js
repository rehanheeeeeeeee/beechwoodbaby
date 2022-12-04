import React from "react";

const styles = {
  container:
    "bg-cartTotal pb-3 rounded-t-[28px] sticky bottom-0 px-8 pt-6 w-full md:w-1/3",
};

export default function CheckoutCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>Card</div>
    </div>
  );
}
