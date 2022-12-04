import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const styles = {
  container:
    "bg-cartItem w-full flex items-center p-3 justify-between rounded-md",
  productInfo: "flex items-cente space-x-2 text-white text-sm",
};

export default function CartProduct({ item }) {
  const { title, price, _id, images, quantity } = item;
  const dispatch = useDispatch();
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
        <div>
          <p>{title}</p>
          <p>{price} BHD</p>
        </div>
      </div>
    </div>
  );
}
