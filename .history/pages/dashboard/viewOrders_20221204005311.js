import { useRouter } from "next/router";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";
import UpdateStatus from "../../components/dashboard/UpdateStatus";
import ViewOrdersTable from "../../components/dashboard/ViewOrdersTable";
const styles = {
  //   container: "w-full",
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
  linkcell:
    "text-blue-400 underline cursor-pointer w-full flex text-center font-medium",
  table: "w-full h-[420px] md:p-5 p-2 flex items-center justify-center",
  cell: "text-textColor",
  amountCell: "font-semibold text-textColor",
  delivered: "text-green-400 cursor-pointer",
  notdelivered: "text-red-400 cursor-pointer",
  paid: "text-green-400",
  unpaid: "text-red-400 ",
  header: "text-base text-headingColor font-semibold",
};
const columns = [
  {
    field: "orderid",
    headerName: "Order ID",
    width: 190,
    headerAlign: "center",
    headerClassName: styles.header,
    align: "center",
    cellClassName: styles.cell,
  },
  {
    field: "orderdate",
    headerName: "Order Date",
    width: 250,
    headerClassName: styles.header,
    headerAlign: "center",
    cellClassName: styles.cell,
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 210,
    headerClassName: styles.header,
    headerAlign: "center",
    align: "center",
    cellClassName: styles.cell,
  },
  {
    field: "orderamount",
    headerName: "Order Amount",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
    cellClassName: styles.amountCell,
  },
  {
    field: "payementstatus",
    headerClassName: styles.header,
    headerName: "Payment Status",
    type: "text",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "deliverystatus",
    headerName: "Delivery Status",
    type: "text",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
  },
  {
    field: "orderdetails",
    headerName: "Order Details",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
    cellClassName: styles.linkcell,
  },
];

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getOrders`,
    {
      method: "POST",
      body: JSON.stringify({ all: true }),
    }
  );
  const data = await response.json();
  const orders = data.map((doc, index) => ({
    id: index,
    orderid: doc.orderId,
    orderdate: new Date(doc.createdAt).toUTCString(),
    email: doc.email,
    orderamount: doc.amount.toString() + " BHD",
    payementstatus: doc.paymentStatus,
    deliverystatus: doc.deliveryStatus,
    orderdetails: "View Details",
  }));
  return {
    props: {
      orders,
    },
  };
};

export default function ViewOrders({ orders }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("");

  return (
    <div className={styles.container}>
      <p className={styles.heading}>All Orders</p>
      <div className="">
        <UpdateStatus
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedOrderId={selectedOrderId}
        />
        <ViewOrdersTable orders={orders} />
      </div>
    </div>
  );
}
