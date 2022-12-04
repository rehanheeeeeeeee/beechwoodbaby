import Image from "next/image";
import React from "react";

const styles = {
  productImage: "md:w-32 sm:h-14 w-14 md:h-32 rounded-md",
  wrapper: "flex items-center py-5 w-full text-slate-50 justify-between",
};

export default function OrderedProduct({ item }) {
  const { title, quantity, color, size, price, images } = item;
  return (
    <div className={styles.wrapper}>
      <div className="flex items-center">
        <Image
          alt=""
          src={images[0].image1}
          width={1920}
          height={1080}
          className={styles.productImage}
        />
        <div className="ml-1 md:ml-6">
          <p className="font-semibold text-base md:text-2xl">{title}</p>
          <p className="py-1 text-gray-300 text-sm md:text-base">
            Quantity: {quantity}
          </p>
          <div className="flex md:mt-6 items-center space-x-10">
            <div className="flex items-center">
              <p className="text-gray-300 mr-2">Color : </p>
              <p className="capitalize mr-1 text-gray-300">{color} - </p>
              <div
                className={`p-2 ${color == "pink" && "bg-pink-500"}  ${
                  color == "blue" && "bg-blue-500"
                }  ${color == "amber" && "bg-amber-200"}  ${
                  color == "black" && "bg-black"
                }  ${
                  color == "white" && "bg-white"
                }  rounded-full border-slate-50 w-4 h-4 border`}
              ></div>
            </div>
            <div className="flex items-center space-x-2 text-slate-50">
              <p>Size -</p>
              <span className="p-0.5 text-sm flex justify-center items-center border border-slate-50">
                {size.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col">
        <p className="font-semibold text-xl">Total </p>
        <p className="text-medium font-semibol">{price * quantity} BHD</p>
      </div>
    </div>
  );
}
