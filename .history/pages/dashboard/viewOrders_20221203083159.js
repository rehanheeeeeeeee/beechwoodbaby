import React from "react";

const styles = {};

const columns = [
  {
    field: "orderid",
    headerName: "Order ID",
    width: 200,
    headerClassName: styles.header,
    headerAlign: "center",
    align: "center",
    cellClassName: styles.cell,
  },
  {
    field: "orderdate",
    headerName: "Order Date",
    width: 250,
    headerAlign: "center",
    headerClassName: styles.header,

    align: "center",
    cellClassName: styles.cell,
  },
  {
    field: "orderamount",
    headerName: "Order Amount",
    width: 150,
    headerAlign: "center",
    headerClassName: styles.header,

    align: "center",
    cellClassName: styles.amountCell,
  },
  {
    field: "deliverystatus",
    headerName: "Delivery Status",
    type: "text",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
    cellClassName: styles.cell,
  },
  {
    field: "orderdetails",
    headerName: "Order Details",
    width: 150,
    headerAlign: "center",
    headerClassName: styles.header,

    cellClassName: styles.linkcell,
    align: "center",
  },
];

export default function ViewOrders() {
  return <div></div>;
}
