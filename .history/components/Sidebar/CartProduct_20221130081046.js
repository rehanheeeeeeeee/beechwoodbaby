import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../redux/cartSlice";

const styles = {
  container:
    "shadow-md backdrop-blur-lg bg-card shadow-sm hover:shadow-lg transition-all ease-in duation-200 w-full my-2 flex items-center p-3 justify-between rounded-md",
  productInfo: "flex items-center space-x-2 text-headingColor text-sm",
  quantityContainer: "flex items-center space-x-3 text-white",
  quantity:
    "p-1 w-5 flex items-center justify-center h-5 rounded-full bg-cartBg text-xs",
  icon: "text-lg cursor-pointer",
};

export default function CartProduct({ item }) {
  const { title, price, id, images, quantity } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToBasket({ id }));
  };

  const removeFromCart = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <Image
          width={1920}
          height={1080}
          src={Object.values(images)[0]}
          alt=""
          className="h-14 w-14 rounded-md object-contain"
        />
        <div className="space-y-1">
          <p>{title}</p>
          <p className="text-xs">{price} BHD</p>
        </div>
      </div>
      <div className={styles.quantityContainer}>
        <span onClick={removeFromCart} className={styles.icon}>
          -
        </span>
        <span className={styles.quantity}>{quantity}</span>
        <span onClick={addToCart} className={styles.icon}>
          +
        </span>
      </div>
    </div>
  );
}
