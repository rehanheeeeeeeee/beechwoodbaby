import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const styles = {
  container: "w-full",
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
  cell: "text-blue-400",
};

const columns = [
  {
    field: "orderid",
    headerName: "Order ID",
    width: 200,
    headerAlign: "center",
  },
  {
    field: "orderdate",
    headerName: "Order Date",
    width: 130,
    headerAlign: "center",
  },
  {
    field: "orderamount",
    headerName: "Order Amount",
    width: 70,
    headerAlign: "center",
  },
  {
    field: "deliverystatus",
    headerName: "Delivery Status",
    type: "text",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "orderdetails",
    headerName: "Order Details",
    width: 150,
    headerAlign: "center",
    cellClassName: styles.cell,
  },
];

export default function Myorders() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/");
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrders`, {
      method: "POST",
      body: user,
    })
      .then((res) => res.json())
      .then((data) => {
        const rows = data.map((order, index) => ({
          id: index,
          orderid: order.orderId,
          orderdate: new Date(order.createdAt).toLocaleDateString(),
          orderamount: order.amount,
          deliverystatus: order.deliveryStatus,
          orderdetails: "View Details",
        }));
        setOrders(rows);
      })
      .catch((error) => console.log(error.message));
  }, [router]);

  const handleClick = (event) => {
    if (event.currentTarget.dataset.field === "orderdetails") {
      const rowIndex = event.currentTarget.parentElement.dataset.rowindex;
      router.push(`/order?orderId=${orders[rowIndex].orderid}`);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Orders</p>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={orders}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          componentsProps={{
            cell: {
              onClick: (event) => handleClick(event),
            },
          }}
        />
      </div>
    </div>
  );
}
