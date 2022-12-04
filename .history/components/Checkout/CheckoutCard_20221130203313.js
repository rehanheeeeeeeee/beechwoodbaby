import React from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../../redux/cartSlice";
import CartProduct from "../Sidebar/CartProduct";

const styles = {
  container: "w-full md:w-1/3 flex items-start pt-12 justify-center",
  card: "bg-cartTotal rounded-t-[28px]",
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
