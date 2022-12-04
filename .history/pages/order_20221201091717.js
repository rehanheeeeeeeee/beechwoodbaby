import React from "react";

export const getServerSideProps = async (context) => {
  const orderId = context.query.orderId;
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrder`, {
    method: "POST",
    body: JSON.stringify({ orderId }),
  });
  const orderDetails = await response.json();
  return {
    props: JSON.parse(JSON.stringify({ orderDetails })),
  };
};

export default function order({ orderDetails }) {
  console.log(orderDetails);
  return <div>order</div>;
}
