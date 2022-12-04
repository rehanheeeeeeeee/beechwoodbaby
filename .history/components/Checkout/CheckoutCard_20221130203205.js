import React from "react";

const styles = {
  container: "w-full md:w-1/3 flex items-center justify-center",
  card: "bg-cartTotal rounded-t-[28px]",
};

export default function CheckoutCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>Card</div>
    </div>
  );
}
