import React from "react";
import CartProduct from "../Sidebar/CartProduct";

const styles = {
  container: "w-full md:w-1/3 flex items-start pt-12 justify-center",
  card: "bg-cartTotal rounded-t-[28px]",
};

export default function CheckoutCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {basket?.map((item, index) => (
          <CartProduct key={index} white={true} item={item} />
        ))}
      </div>
    </div>
  );
}
