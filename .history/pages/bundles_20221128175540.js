import React from "react";

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
  console.log(products);
  return <div>Bundles</div>;
}
