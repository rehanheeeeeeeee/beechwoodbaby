import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "All Categories" }),
    }
  );
  const data = await response.json();
  const orders = data.map((order, index) => ({
    id: index,
    title: order.title,
    availableQty: order.availableQty,
    price: order.price,
    color: order.color,
    size: order.size,
    category: order.category,
    orderDetails: "View Details",
  }));
  return {
    props: {
      orders,
    },
  };
};

const styles = {
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
    field: "title",
    headerName: "Title",
    width: 190,
    headerAlign: "center",
    headerClassName: styles.header,
    align: "center",
    cellClassName: styles.cell,
  },
  {
    field: "availableQty",
    headerName: "Available Qty",
    width: 250,
    headerClassName: styles.header,
    headerAlign: "center",
    cellClassName: styles.cell,
    align: "center",
  },
  {
    field: "price",
    headerName: "Price",
    type: "text",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
  },
  {
    field: "color",
    headerName: "Color",
    width: 210,
    headerClassName: styles.header,
    headerAlign: "center",
    align: "center",
    cellClassName: styles.cell,
  },
  {
    field: "size",
    headerName: "Size",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
    cellClassName: styles.amountCell,
  },
  {
    field: "category",
    headerClassName: styles.header,
    headerName: "Payment Status",
    type: "text",
    width: 150,
    headerAlign: "center",
    align: "center",
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

export default function ViewProducts({ orders }) {
  return (
    <div>
      <p className={styles.heading}>View Products</p>
      <div className={styles.table}>
        <DataGrid
          rows={orders}
          columns={columns}
          components={{
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getCellClassName={(params) => {
            if (params.field === "deliverystatus") {
              if (params.value === "NotDelivered") {
                return styles.notdelivered;
              } else {
                return styles.delivered;
              }
            } else if (params.field === "payementstatus") {
              if (params.value === "Paid") {
                return styles.paid;
              } else {
                return styles.unpaid;
              }
            }
          }}
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
