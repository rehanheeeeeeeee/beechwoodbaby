import React from "react";
import Product from "../components/Products/Product";

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "Cribs" }),
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
  heading: "text-3xl font-extrabold tracking-wide text-center w-full",
};

export default function Cribs({ products }) {
  console.log(products);
  return (
    <section className="text-gray-600 py-8 body-font">
      <p className={styles.heading}>CRIBS</p>
      <div className="container px-5 mx-auto py-6">
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
