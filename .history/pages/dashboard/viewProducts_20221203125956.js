import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
  linkcell:
    "text-blue-400 underline cursor-pointer w-full flex text-center font-medium",
  table: "w-[95%] h-[430px] md:p-5 p-2 flex items-center justify-center",
  cell: "text-textColor whitespace-wrap",
  amountCell: "font-semibold text-textColor",
  header: "text-base text-headingColor font-semibold",
  updatecell:
    "text-green-500 underline cursor-pointer w-full flex text-center font-medium",
};

const columns = [
  {
    field: "title",
    headerName: "Title",
    width: 250,
    headerAlign: "center",
    headerClassName: styles.header,
    align: "center",
    cellClassName: styles.cell,
  },
  {
    field: "availableQty",
    headerName: "Available Qty",
    width: 150,
    headerClassName: styles.header,
    headerAlign: "center",
    cellClassName: styles.cell,
    align: "center",
  },
  {
    field: "price",
    headerName: "Price",
    type: "text",
    width: 100,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
    cellClassName: styles.amountCell,
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
    headerClassName: styles.header,
    headerAlign: "center",
    align: "center",
    cellClassName: styles.cell,
  },
  {
    field: "size",
    headerName: "Size",
    width: 100,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
    cellClassName: styles.cell,
  },
  {
    field: "category",
    headerClassName: styles.header,
    headerName: "Category",
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
  {
    field: "updatedetails",
    headerName: "Update Details",
    width: 150,
    headerAlign: "center",
    align: "center",
    headerClassName: styles.header,
    cellClassName: styles.updatecell,
  },
];

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "All Categories" }),
    }
  );
  const data = await response.json();
  const orders = data.map((order) => ({
    id: order._id,
    title: order.title,
    availableQty: order.availableQty,
    price: order.price.toString() + " BHD",
    color: order.color,
    size: order.size,
    category: order.category,
    orderdetails: "View Details",
    updatedetails: "Update Details",
  }));
  return {
    props: {
      orders: orders,
    },
  };
};

export default function ViewProducts({ orders }) {
  const handleClick = (event) => {
    if (event.currentTarget.dataset.field === "orderdetails") {
      const rowIndex = event.currentTarget.parentElement.dataset.rowindex;
      router.push(`/products?orderId=${orders[rowIndex].orderid}`);
    }
  };

  const CustomNoRowsOverlay = () => (
    <div className="flex flex-col items-center h-full px-2 justify-center space-y-5 w-full">
      <Image
        className="object-center w-36 h-36"
        src={"/emptyCart.svg"}
        width={1920}
        height={1080}
        alt=""
      />
      <p className="text-sm text-center">
        You Haven{"'"}t Added Any Products to your Site
      </p>
    </div>
  );
  return (
    <div>
      <p className={styles.heading}>View Products</p>
      <div className="w-full flex justify-center"></div>
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
