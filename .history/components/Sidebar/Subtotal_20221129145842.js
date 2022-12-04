import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../../redux/cartSlice";

const styles = {
  amount: "flex items-center justify-between flex-1 mb-2 text-gray-400 text-lg",
  checkoutBtn:
    "block text-center rounded-3xl my-2 bg-gradient-to-tr from-orange-400 to-orange-600  text-gray-50 p-2 text-lg hover:shadow-lg",
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
      title: "Sub Total",
      amount: basketTotal,
    },
    {
      title: "Delivery",
      amount: 5.0,
    },
  ];

  return (
    <div className="bg-cartTotal pb-3 rounded-t-[28px] h-[44%] px-8 pt-6 w-full">
      {amounts.map((amount, index) => (
        <Amount key={index} title={amount.title} amount={amount.amount} />
      ))}
      <div className="w-full h-[1px] bg-slate-50 my-5"></div>
      <div className="flex w-full items-center justify-between text-slate-50 text-xl font-bold mb-2">
        <p>Total</p>
        <p>{basketTotal + 0.5} BHD</p>
      </div>
      <Link href={"/checkout"} className={styles.checkoutBtn}>
        Checkout
      </Link>
    </div>
  );
}
