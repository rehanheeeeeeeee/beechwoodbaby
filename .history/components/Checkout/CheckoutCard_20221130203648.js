import React from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../../redux/cartSlice";
import CartProduct from "../Sidebar/CartProduct";

const styles = {
  container: " w-[258px] flex items-start pt-12 justify-center",
  card: "bg-cartTotal rounded-t-[28px] px-5 py-4 m-5",
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
