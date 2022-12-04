import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../redux/cartSlice";

export default function Subtotal() {
  const basketTotal = useSelector(selectBasketTotal);
  console.log(basketTotal);
  return (
    <div className="bg-cartTotal rounded-top-xl">
      <div>
        <p>Subtotal</p>
        <p>{basketTotal}</p>
      </div>
    </div>
  );
}
