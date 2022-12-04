import Image from "next/image";
import React, { useState } from "react";
import { TbBasket, TbLogout } from "react-icons/tb";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";
import { BsAlarm } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
const styles = {
  logo: "flex items-center",
  logoText: "font-bold text-headingColor -ml-2 text-xl",
  link: "capitalize text-textColor font-medium text-[17px] hover:text-headingColor transition-all ease-in duration-100",
  options: "flex space-x-5",
  bigWrapper: "md:flex hidden items-center justify-between ",
  icon: "text-3xl hover:text-textColor  transition-all ease-in duration-100 cursor-pointer",
  smallWrapper: "flex items-center justify-between px-2 md:hidden relative",
  dropdown:
    "shadow-lg w-44 bg-gray-50 rounded-lg md:hidden top-[48px] absolute right-9",
  dropdownLink:
    "text-lg font-medium py-2 w-30 px-3 hover:shadow-md text-left text-headingColor rounded-lg hover:bg-slate-200 transition-all ease-in duration-100 font-medium",
  logout:
    "m-2 space-x-3 text-lg font-medium py-2 px-3 flex items-center shadow-md justify-center text-headingColor rounded-lg bg-slate-200 hover:bg-slate-300 transition-all ease-in duration-100 cursor-pointer",
  logoutIcon: "text-2xl",
};

const options = [
  { title: "Home", link: "home" },
  { title: "About Us", link: "about" },
  { title: "Contact Us", link: "contact" },
];

const Option = ({ title, link }) => (
  <Link href={`/${link}`}>
    <p className={styles.link}>{title}</p>
  </Link>
);

const DropdownOption = ({ title, link }) => (
  <Link href={`/${link}`}>
    <p className={styles.dropdownLink}>{title}</p>
  </Link>
);

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="">
      {/* Big Screen */}
      <div className={styles.bigWrapper}>
        <Link href={"/"} className={styles.logo}>
          <Image src={"/logo.png"} width={80} height={80} alt="" />
          <p className={styles.logoText}>Beechwood Baby</p>
        </Link>
        <div className="flex items-center space-x-5">
          <Dropdown />
          <div className={styles.options}>
            {options.map((option, index) => (
              <Option key={index} title={option.title} link={option.link} />
            ))}
          </div>
          <TbBasket className={styles.icon} />
          <motion.img
            onClick={() => setShowOptions(!showOptions)}
            whileTap={{ scale: 0.6 }}
            src={"/avatar.png"}
            alt=""
            className="w-9 h-9 cursor-pointer"
          />
        </div>
      </div>
      {/* Small Screen */}
      <div className={styles.smallWrapper}>
        <TbBasket className={styles.icon} />
        <Link href={"/"} className={styles.logo}>
          <Image src={"/logo.png"} width={80} height={80} alt="" />
          <p className={styles.logoText}>Beechwood Baby</p>
        </Link>
        <motion.img
          onClick={() => setShowOptions(!showOptions)}
          whileTap={{ scale: 0.6 }}
          src={"/avatar.png"}
          alt=""
          className="w-9 h-9 cursor-pointer"
        />
      </div>
      {showOptions && (
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          className={styles.dropdown}
        >
          {options.map((option, index) => (
            <DropdownOption
              key={index}
              title={option.title}
              link={option.link}
            />
          ))}
          <Link href={`/products`}>
            <p className={styles.dropdownLink}>Products</p>
          </Link>
          <div className={styles.logout}>
            <p>Log Out</p>
            <TbLogout className={styles.logoutIcon} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
