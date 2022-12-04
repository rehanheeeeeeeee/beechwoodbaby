import React from "react";

const styles = {
  container: "bg-cartTotal pb-3  sticky bottom-0 px-8 pt-6 w-full md:w-1/3",
  card: "bg-cartTotal rounded-t-[28px]",
};

export default function CheckoutCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>Card</div>
    </div>
  );
}
