import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../redux/cartSlice";

export default function Subtotal() {
  const basketTotal = useSelector(selectBasketTotal);
  return <div className="bg-cartTotal"></div>;
}
