import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

const columns = [
  {
    field: "orderid",
    headerName: "Order ID",
    width: 200,
    // headerClassName: styles.header,
    headerAlign: "center",
    align: "center",
    // cellClassName: styles.cell,
  },
  {
    field: "orderdate",
    headerName: "Order Date",
    width: 250,
    headerAlign: "center",
    // headerClassName: styles.header,
    align: "center",
    // cellClassName: styles.cell,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    headerAlign: "center",
    // headerClassName: styles.header,
    align: "center",
    // cellClassName: styles.cell,
  },
  {
    field: "orderamount",
    headerName: "Order Amount",
    width: 150,
    headerAlign: "center",
    // headerClassName: styles.header,
    align: "center",
    // cellClassName: styles.amountCell,
  },
  {
    field: "payementstatus",
    headerName: "Payment Status",
    type: "text",
    width: 150,
    headerAlign: "center",
    align: "center",
    // headerClassName: styles.header,
    // cellClassName: styles.cell,
  },
  {
    field: "deliverystatus",
    headerName: "Delivery Status",
    type: "text",
    width: 150,
    headerAlign: "center",
    align: "center",
    // headerClassName: styles.header,
    // cellClassName: styles.cell,
  },
  {
    field: "orderdetails",
    headerName: "Order Details",
    width: 150,
    headerAlign: "center",
    // headerClassName: styles.header,
    // cellClassName: styles.linkcell,
    align: "center",
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
  const orders = data.map((doc, index) => {
    return {
      id: index,
      orderid: doc.orderId,
      orderdate: new Date(doc.createdAt).toUTCString(),
      email: doc.email,
      amount: doc.amount,
      paymentstatus: doc.paymentStatus,
      deliverystatus: doc.deliveryStatus,
      orderdetails: "View Details",
    };
  });
  return {
    props: {
      orders,
    },
  };
};

export default function ViewOrders({ orders }) {
  console.log(orders);
  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Orders</p>
      {/* <div className="w-full flex items-center justify-center"> */}
      <div className="">
        <DataGrid
          rows={orders}
          columns={columns}
          // components={{
          //   NoRowsOverlay: CustomNoRowsOverlay,
          // }}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // getCellClassName={(params) => {
          //   if (params.field === "deliverystatus") {
          //     if (params.value === "NotDelivered") {
          //       return styles.notdelivered;
          //     } else {
          //       return styles.delivered;
          //     }
          //   }
          // }}
          // componentsProps={{
          //   cell: {
          //     onClick: (event) => handleClick(event),
          //   },
          // }}
        />
      </div>
    </div>
    // </div>
  );
}
