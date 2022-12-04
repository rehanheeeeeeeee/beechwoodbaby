import React from "react";
import Product from "../modals/Product";

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

export default function Bundles({ products }) {
  return    ( <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {products.map((product,index)=><Product key={index} product={product} />)}
    </div>
  </div>
</section>)
}
