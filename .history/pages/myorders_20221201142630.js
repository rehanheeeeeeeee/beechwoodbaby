import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const styles = {
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
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
      .then((data) => {})
      .catch((error) => console.log(error.message));
  }, [router]);
  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Orders</p>
    </div>
  );
}
