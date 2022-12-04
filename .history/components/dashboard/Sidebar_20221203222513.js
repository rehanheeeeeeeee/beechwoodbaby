import Image from "next/image";
import React from "react";

const links = [
  {
    title: "Dashboard",
    link: "dashboard",
  },
  {
    title: "View Orders",
    link: "vieworders",
  },
  {
    title: "View Products",
    link: "viewproducts",
  },
  {
    title: "Add Product",
    link: "create",
  },
];

export default function Sidebar() {
  return (
    <div className="w-[230px] p-3 bg-headingColor sticky h-screen">
      <Image
        src={"/logo.png"}
        width={1920}
        height={1080}
        alt=""
        className="h-20 w-20 object-contain"
      />
    </div>
  );
}
