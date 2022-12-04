import React from "react";
import { useSelector } from "react-redux";
import { selectBasket, selectBasketTotal } from "../../redux/cartSlice";
import CartProduct from "../Sidebar/CartProduct";

const styles = {
  container:
    " md:w-[45vw] w-full flex px-3 pb-5 items-center h-full md:pt-12 justify-center",
  card: "bg-cartTotal w-full rounded-[28px] py-4 px-5 md:mr-5",
  amount:
    "flex items-center justify-between flex-1 mb-2 text-gray-400 text-lg px-2",
};

const Amount = ({ title, amount }) => (
  <div className={styles.amount}>
    <p>{title}</p>
    <p>{amount} BHD</p>
  </div>
);

export default function CheckoutCard() {
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
  const basket = useSelector(selectBasket);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {basket?.map((item, index) => (
          <CartProduct key={index} item={item} />
        ))}
        {amounts.map((amount, index) => (
          <Amount key={index} title={amount.title} amount={amount.amount} />
        ))}
      </div>
    </div>
  );
}
