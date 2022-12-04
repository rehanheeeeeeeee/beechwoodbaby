import React from "react";

const styles = {
  container: "p-5",
  statusCard: "p-5 shadow-md rounded-md m-2",
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

const StatusCard = ({ title, amount }) => (
  <div className={styles.statusCard}>
    <p>{title}</p>
    <p>{amount}</p>
  </div>
);

export default function Dashboard({ orders, users }) {
  const stats = [
    {
      title: "Total SignedIn Users",
      amount: users.length,
    },
    {
      title: "Total Orders Placed",
      amount: orders.length,
    },
    {
      title: "Total Money Earned",
      amount:
        orders.reduce((prev, order) => prev + order.amount, 0).toString() +
        " BHD",
    },
  ];

  return (
    <div className={styles.container}>
      dashboard
      <div>
        {stats.map(({ title, amount }, index) => (
          <StatusCard key={index} title={title} amount={amount} />
        ))}
      </div>
    </div>
  );
}
