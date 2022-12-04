import Image from "next/image";
import React from "react";

const styles = {
  productImage: "w-24 h-24 rounded-md",
  wrapper: "flex items-center w-full",
};

export default function OrderedProduct({ item }) {
  const { title, quantity, color, size, price, images } = item;
  console.log(images);
  return (
    <div className={styles.wrapper}>
      <Image
        alt=""
        src={images[0].image1}
        width={1920}
        height={1080}
        className={styles.productImage}
      />
      <div>
        <p>{title}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}
