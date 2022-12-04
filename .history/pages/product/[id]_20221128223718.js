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
          <div className="lg:w-1/2 space-y-4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm capitalize title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex items-center">
              <p className="text-gray-700 mr-2">Color : </p>
              <p className="capitalize mr-2">{color} - </p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
