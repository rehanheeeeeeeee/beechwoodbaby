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
  return (
    <section class="text-gray-400 bg-primary body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-[95%] mx-auto flex flex-wrap">
          <Carousel images={Object.values(product.images)} />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
            <h2 class="text-sm capitalize title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
