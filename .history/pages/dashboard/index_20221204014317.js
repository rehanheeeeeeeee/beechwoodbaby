import React, { useState } from "react";
import UpdateStatus from "../../components/dashboard/UpdateStatus";
import ViewOrdersTable from "../../components/dashboard/ViewOrdersTable";

const styles = {
  container: "p-5 flex items-start flex-col",
  statusCard: "p-7 shadow-lg rounded-md bg-headingColor",
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mb-5",
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
    <p className="font-semibold text-lg text-gray-200">{title}</p>
    <p className="text-white font-bold text-3xl">{amount}</p>
  </div>
);

export default function Dashboard({ orders, users }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("");

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

  const ordersData = orders.map((doc, index) => ({
    id: index,
    orderid: doc.orderId,
    orderdate: new Date(doc.createdAt).toUTCString(),
    email: doc.email,
    orderamount: doc.amount.toString() + " BHD",
    payementstatus: doc.paymentStatus,
    deliverystatus: doc.deliveryStatus,
    orderdetails: "View Details",
  }));

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Dashboard</p>
      <div className="bg-card p-5 lg:grid-cols-3 rounded-md shadow-lg w-full items-center grid md:grid-cols-2 grid-cols-1 gap-4">
        {stats.map(({ title, amount }, index) => (
          <StatusCard key={index} title={title} amount={amount} />
        ))}
      </div>
      <div>
        <p className="font-semibold text-lg my-2">View Orders</p>
        <UpdateStatus
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedOrderId={selectedOrderId}
        />
        <ViewOrdersTable
          orders={ordersData}
          setSelectedOrderId={setSelectedOrderId}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}
