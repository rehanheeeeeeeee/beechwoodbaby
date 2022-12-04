import Image from "next/image";
import React from "react";
import Product from "../components/Products/Product";

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "Purses" }),
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

export default function Purses({ products }) {
  return (
    <section className="text-gray-600 py-10 body-font">
      <p className={styles.heading}>PURSES</p>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.length ? (
            products.map((product, index) => (
              <Product key={index} product={product} />
            ))
          ) : (
            <div className="flex flex-col items-center p-2 justify-center space-y-5">
              <Image
                className="h-54 w-64 object-contain"
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
