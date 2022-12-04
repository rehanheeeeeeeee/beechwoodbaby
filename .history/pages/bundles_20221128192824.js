import React from "react";
import Product from "../components/Products/Product";

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "Bundles" }),
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

export default function Bundles({ products }) {
  return (
    <section className="text-gray-600 body-font py-10">
      <p className={styles.heading}>BUNDLES</p>

      <div className="container px-5 mx-auto py-8">
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
