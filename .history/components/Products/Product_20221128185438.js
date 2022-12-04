import Image from "next/image";
import React, { useState } from "react";

export default function Product({ product }) {
  const { category, price, color, title, images } = product;
  const [showImage, setShowImage] = useState(images.image1);
  return (
    <div
      onMouseEnter={() =>
        setShowImage(() => {
          if (images.image2) {
            setShowImage(images.image2);
          }
        })
      }
      onMouseLeave={() => setShowImage(images.image1)}
      className="lg:w-1/4 md:w-1/2 p-4 w-full group cursor-pointer"
    >
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-contain bg-[#f8f8f8] transition-all ease-in duration-200 py-2 shadow-lg group-hover:shadow-xl object-center w-full h-full block"
          src={showImage}
          width={1920}
          height={1080}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <div
          className={`p-3 bg-pink-500 rounded-full border-black border`}
        ></div>
        <p className="mt-1">{price} BHD</p>
      </div>
    </div>
  );
}
