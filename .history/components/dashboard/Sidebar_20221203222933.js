import Image from "next/image";
import React from "react";
import { AiOutlineFolderAdd, AiOutlineStock } from "react-icons/ai";
import { BiCategoryAlt, BiHome } from "react-icons/bi";
import { CiBoxes } from "react-icons/ci";
const links = [
  {
    title: "Dashboard",
    link: "dashboard",
    icon: <BiHome />,
  },
  {
    title: "View Orders",
    link: "vieworders",
    icon: <CiBoxes />,
  },
  {
    title: "View Products",
    link: "viewproducts",
    icon: <BiCategoryAlt />,
  },
  {
    title: "Add Product",
    link: "create",
    icon: <AiOutlineFolderAdd />,
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
