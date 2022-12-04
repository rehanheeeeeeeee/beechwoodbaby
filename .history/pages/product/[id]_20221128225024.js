import Image from "next/image";
import React from "react";
import Carousel from "../../components/Product/Carousel";
import CarouselFadeExample from "../../components/Product/Carousel";

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProductsById`,
    {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    }
  );
  const product = await response.json();
  return {
    props: {
      product,
    },
  };
};

export default function Product({ product }) {
  const color = product.color.toLowerCase();
  return (
    <section className="text-gray-400 bg-primary body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Carousel images={Object.values(product.images)} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-3">
            <h2 className="text-sm capitalize title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 space-x-10">
              <div className="flex items-center">
                <p className="text-headingColor mr-2">Color : </p>
                <p className="capitalize mr-1 text-gray-700">{color} - </p>
                <div
                  className={`p-2 ${color == "pink" && "bg-pink-500"}  ${
                    color == "blue" && "bg-blue-500"
                  }  ${color == "amber" && "bg-amber-200"}  ${
                    color == "black" && "bg-black"
                  }  ${
                    color == "white" && "bg-white"
                  }  rounded-full border-black w-4 h-4 border`}
                ></div>
              </div>
              <div className="flex items-center space-x-2 text-headingColor">
                <p>Size -</p>
                <span className="p-0.5 text-sm flex justify-center items-center border border-headingColor">
                  SM
                </span>
              </div>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
