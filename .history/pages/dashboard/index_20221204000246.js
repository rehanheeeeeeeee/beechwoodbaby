import React from "react";

const styles = {
  container: "p-5",
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUsers`);
  const users = await response.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrders`, {
    method: "POST",
    body: JSON.stringify({ all: true }),
  });
  const orders = await res.json();
  return {
    props: {
      users,
      orders,
    },
  };
};

export default function Dashboard({ orders, users }) {
  console.log(users.length, orders.length);
  return <div className={styles.container}>Dashboard</div>;
}
