import React from "react";

const styles = {
  container: "w-full md:w-1/3",
  card: "bg-cartTotal rounded-t-[28px] sticky top-12",
};

export default function CheckoutCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>Card</div>
    </div>
  );
}
