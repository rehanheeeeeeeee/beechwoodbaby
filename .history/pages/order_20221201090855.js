import React from "react";

export const getServerSideProps = async (context) => {
  const orderId = context.query.orderId;
  const order = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrder`, {
    methos: "POST",
    body: JSON.stringify({orderId}),
  });
};

export default function order() {
  return <div>order</div>;
}
