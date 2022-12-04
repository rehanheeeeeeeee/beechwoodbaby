import React from "react";

export const getServerSideProps = (context) => {
  const orderId = context.query.orderId;
};

export default function order() {
  return <div>order</div>;
}
