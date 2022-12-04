import Image from "next/image";
import React from "react";

const styles = {
  productImage: "w-18 h-18 rounded-md",
  wrapper: "",
};

export default function OrderedProduct({ item }) {
  const { title, quantity, color, size, price, images } = item;
  console.log(images);
  return (
    <div className={styles.wraper}>
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
