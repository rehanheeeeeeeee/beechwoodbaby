import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineFolderAdd, AiOutlineStock } from "react-icons/ai";
import { BiCategoryAlt, BiHome } from "react-icons/bi";
import { CiBoxes } from "react-icons/ci";

const styles = {
  link: "flex items-center space-x-2 hover:bg-textColor transition-all ease-in duration-200 rounded-md text-md p-2 my-2 text-slate-50",
  linkIcon: "text-2xl",
};

const links = [
  {
    title: "Dashboard",
    link: "",
    icon: <BiHome className={styles.linkIcon} />,
  },
  {
    title: "View Orders",
    link: "viewOrders",
    icon: <CiBoxes className={styles.linkIcon} />,
  },
  {
    title: "View Products",
    link: "viewProducts",
    icon: <BiCategoryAlt className={styles.linkIcon} />,
  },
  {
    title: "Add Product",
    link: "create",
    icon: <AiOutlineFolderAdd className={styles.linkIcon} />,
  },
];

const Option = ({ title, link, icon }) => (
  <Link className={styles.link} href={`/dashboard/${link}`}>
    {icon}
    <p>{title}</p>
  </Link>
);

export default function Sidebar() {
  return (
    <div className="w-[230px] max-sm:fixed max-sm:-translate-x-full -mt-1 p-3 bg-headingColor sticky left-0 bottom-0 top-0 h-screen">
      <Image
        src={"/logo.png"}
        width={1920}
        height={1080}
        alt=""
        className="h-20 w-20 object-contain"
      />
      <div>
        {links.map((option, index) => (
          <Option
            key={index}
            title={option.title}
            link={option.link}
            icon={option.icon}
          />
        ))}
      </div>
    </div>
  );
}
