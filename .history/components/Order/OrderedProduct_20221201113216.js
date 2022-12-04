import Image from "next/image";
import React from "react";

const styles = {
  productImage: "",
};

export default function OrderedProduct({ item }) {
  const { title, quantity, color, size, price, images } = item;
  console.log(images);
  return (
    <div>
      <Image
        alt=""
        src={images[0].image1}
        width={1920}
        height={1080}
        className={StyleSheet.productImage}
      />
    </div>
  );
}
