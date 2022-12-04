import Image from "next/image";
import React from "react";

export default function OrderedProduct({ item }) {
  const { title, quantity, color, size, price, images } = item;
  console.log(images);
  return (
    <div>
      <Image alt="" src={images} width={1920} height={1080} />
    </div>
  );
}
