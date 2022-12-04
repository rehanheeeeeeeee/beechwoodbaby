import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../redux/cartSlice";

const styles = {
  amount: "flex items-center justify-between flex-1 p-5 text-gray-100",
};

export default function Subtotal() {
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <div className="bg-cartTotal rounded-t-[30px]">
      <div className={styles.amount}>
        <p>Subtotal</p>
        <p>{basketTotal}BHD</p>
      </div>
    </div>
  );
}
