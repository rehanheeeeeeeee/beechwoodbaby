import React from "react";

export const getServerSideProps = async (context) => {
  const orderId = context.query.orderId;
  console.log(orderId);
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrder`, {
    method: "POST",
    body: JSON.stringify({ orderId }),
  });
  const orderDetails = await response.json();
  return {
    props: { orderDetails: JSON.parse(JSON.stringify(orderDetails)) },
  };
};

const styles = {
  container: "flex items-center justify-center w-full p-10",
  wrapper: "bg-cart rounded-xl",
};

export default function order({ orderDetails }) {
  console.log(orderDetails)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>order</div>
    </div>
  );
}
