import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../redux/cartSlice";

const styles = {
  amount: "flex items-center w-full justify-between",
};

export default function Subtotal() {
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <div className="bg-cartTotal rounded-top-xl">
      <div className={styles.amount}>
        <p>Subtotal</p>
        <p>{basketTotal}</p>
      </div>
    </div>
  );
}
