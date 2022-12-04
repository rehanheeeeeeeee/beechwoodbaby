import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const styles = {
  container: "w-full",
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

const columns = [
  { field: "orderid", headerName: "Order ID", width: 130 },
  { field: "orderdate", headerName: "Order Date", width: 130 },
  { field: "orderamount", headerName: "Order Amount", width: 70 },
  {
    field: "deliverystatus",
    headerName: "Delivery Status",
    type: "text",
    width: 90,
  },
  {
    field: "orderdetails",
    headerName: "Order Details",
    width: 70,
  },
];

export default function Myorders() {
  const router = useRouter();
  const [orders, setOrders] = useState([
    {
      deliverystatus: "NotDelivered",
      orderamount: 843,
      orderdate: "12/1/2022",
      orderid: "1X8323650R736510K",
      orderdetails: (
        <Link href={`/order?orderId=dkfdfkjdsfknjfsdj`}> View Details</Link>
      ),
    },
  ]);

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
        const rows = data.map((order) => ({
          orderid: order.orderId,
          orderdate: new Date(order.createdAt).toLocaleDateString(),
          orderamount: order.amount,
          deliverystatus: order.deliveryStatus,
          orderdetails: (
            <Link href={`/order?orderId=${order.orderId}`}> View Details</Link>
          ),
        }));
        console.log(rows);
      })
      .catch((error) => console.log(error.message));
  }, [router]);
  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Orders</p>
      <div style={{ height: 400, width: "100%" }}>
        {orders.length && (
          <DataGrid
            rows={orders}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        )}
      </div>
    </div>
  );
}
