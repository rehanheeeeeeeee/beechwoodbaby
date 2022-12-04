import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../redux/cartSlice";

const styles = {
  amount: "flex items-center justify-between flex-1 text-gray-400 text-xl",
};

const Amount = ({ title, amount }) => (
  <div className={styles.amount}>
    <p>{title}</p>
    <p>{amount} BHD</p>
  </div>
);

export default function Subtotal() {
  const basketTotal = useSelector(selectBasketTotal);

  const amounts = [
    {
      title: "Subtotal",
      amount: basketTotal,
    },
    {
      title: "Delivery",
      amount: 5.0,
    },
  ];

  return (
    <div className="bg-cartTotal rounded-t-[28px]">
      {amounts.map((amount, index) => (
        <Amount key={index} title={amount.title} amount={amount.amount} />
      ))}
    </div>
  );
}
