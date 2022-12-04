import React from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../../redux/cartSlice";
import CartProduct from "../Sidebar/CartProduct";

const styles = {
  container:
    " md:w-[45vw] w-full flex px-3 pb-5 items-center h-full md:pt-12 justify-center",
  card: "bg-cartTotal w-full rounded-[28px] py-4 px-5 md:mr-5",
};

export default function CheckoutCard() {
  const basket = useSelector(selectBasket);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {basket?.map((item, index) => (
          <CartProduct key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
