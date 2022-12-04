import Image from "next/image";
import React from "react";

const styles = {
  productImage: "md:w-32 sm:h-14 w-14 md:h-32 rounded-md",
  wrapper: "flex items-center py-5 w-full text-slate-50 justify-between h-fit",
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
        <div className="ml-2 md:ml-6">
          <p className="font-semibold text-base md:text-2xl">{title}</p>
          <p className="py-1 md:pt-2 text-gray-300 text-xs md:text-base">
            Quantity: {quantity}
          </p>
          <div className="flex md:mt-3 items-center md:space-x-10 space-x-5">
            <div className="flex items-center">
              <p className="text-gray-300 mr-2 text-xs md:text-base ">
                Color :{" "}
              </p>
              <p className="capitalize mr-1 text-gray-300 text-xs md:text-base">
                {color} -{" "}
              </p>
              <div
                className={`md:p-2 p-1 ${color == "pink" && "bg-pink-500"}  ${
                  color == "blue" && "bg-blue-500"
                }  ${color == "amber" && "bg-amber-200"}  ${
                  color == "black" && "bg-black"
                }  ${
                  color == "white" && "bg-white"
                }  rounded-full border-slate-50 w-2 h-2 md:w-4 md:h-4  border`}
              ></div>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-xs md:text-base">
              <p>Size -</p>
              <span className="p-0.5 text-xs md:text-sm flex justify-center items-center border border-slate-50">
                {size.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-between">
        <p className="font-semibold text-base md:text-xl ">Total </p>
        <p className="md:text-medium text-sm font-semibold">
          {price * quantity} BHD
        </p>
      </div>
    </div>
  );
}
