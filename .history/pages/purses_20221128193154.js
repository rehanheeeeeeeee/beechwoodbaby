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
            <div>
              <p></p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
