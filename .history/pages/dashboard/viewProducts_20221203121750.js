import React from "react";

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "All Categories" }),
    }
  );
  const data = await response.json();
  return {
    props: {
      orders: data,
    },
  };
};

export default function ViewProducts({ orders }) {
  console.log(orders);
  return <div>ViewProducts</div>;
}
