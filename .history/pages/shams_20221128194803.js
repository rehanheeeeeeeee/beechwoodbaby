import Image from "next/image";
import React from "react";
import Product from "../components/Products/Product";

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "Shams" }),
    }
  );
  const products = await response.json();
  return {
    props: {
      products,
    },
  };
};

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full",
};

export default function Shams({ products }) {
  return (
    <section className="text-gray-600 body-font py-10">
      <p className={styles.heading}>CLOTHES</p>
      <div className="container px-5 mx-auto py-10">
        <div className="flex flex-wrap -m-4">
          {products.length ? (
            products.map((product, index) => (
              <Product key={index} product={product} />
            ))
          ) : (
            <div className="flex flex-col items-center p-2 justify-center space-y-5 w-full pt-5">
              <Image
                className="h-64 w-64 object-contain"
                src={"/emptyCart.svg"}
                width={1920}
                height={1080}
                alt=""
              />
              <p className="text-xl text-center">
                Sorry we are out Stock right Now. Please Come Back Later
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
