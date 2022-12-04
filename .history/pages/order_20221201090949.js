import React from "react";

export const getServerSideProps = async (context) => {
  const orderId = context.query.orderId;
  const orderDetails = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrder`, {
    method: "POST",
    body: JSON.stringify({orderId}),
  });
  return {
    orderDetails
  }
};

export default function order() {
  return <div>order</div>;
}
