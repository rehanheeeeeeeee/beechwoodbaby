import Image from "next/image";
import React from "react";

const styles = {
  productImage: "w-32 h-32 rounded-md",
  wrapper: "flex items-center py-5 w-full text-slate-50",
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
      <div className="ml-4">
        <p>{title}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}
