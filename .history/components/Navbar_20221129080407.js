import Image from "next/image";
import React, { useState } from "react";
import { TbLogout } from "react-icons/tb";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";
import { IoMdBasket } from "react-icons/io";
import { IoShirt } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { MdCrib } from "react-icons/md";
import { GiHandBag, GiPillow } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectShowSidebar, setShowSidebar } from "../redux/sidebarSlice";
const styles = {
  logo: "flex items-center md:ml-0 -ml-5",
  logoText: "font-bold text-headingColor -ml-4 text-xl md:text-2xl",
  link: "capitalize text-textColor font-medium text-[15px] hover:text-headingColor transition-all ease-in duration-100",
  options: "flex space-x-5",
  bigWrapper: "md:flex hidden px-2 items-center justify-between ",
  icon: "text-[32px] text-textColor hover:text-headingColor  transition-all md:w-14 ease-in duration-100 cursor-pointer",
  smallWrapper: "flex items-center justify-between px-2 md:hidden relative",
  dropdown:
    "shadow-lg w-44 bg-gray-50 rounded-lg md:hidden top-[50px] absolute right-9",
  dropdownLink:
    "text-lg font-medium py-2 w-30 px-3 hover:shadow-md text-left text-headingColor rounded-lg hover:bg-slate-200 transition-all ease-in duration-100 font-medium",
  logout:
    "m-2 space-x-3 text-lg font-medium py-2 px-3 flex items-center shadow-md justify-center text-headingColor rounded-lg bg-slate-200 hover:bg-slate-300 transition-all ease-in duration-100 cursor-pointer",
  logoutIcon: "text-2xl",
  linkIcon: "group-hover:animate-bounce text-lg text-textColor",
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

const links = [
  { link: "cribs", icon: <MdCrib className={styles.linkIcon} /> },
  { link: "purses", icon: <GiHandBag className={styles.linkIcon} /> },
  { link: "bundles", icon: <BsHandbagFill className={styles.linkIcon} /> },
  { link: "shams", icon: <GiPillow className={styles.linkIcon} /> },
  { link: "clothes", icon: <IoShirt className={styles.linkIcon} /> },
];

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  const showSidebar = useSelector(selectShowSidebar);
  const dispatch = useDispatch();
  return (
    <div className="">
      {/* Big Screen */}
      <div className={styles.bigWrapper}>
        <Link href={"/"} className={styles.logo}>
          <Image src={"/logo.png"} width={90} height={90} alt="" />
          <p className={styles.logoText}>Beechwood Baby</p>
        </Link>
        <div className="flex items-center space-x-5">
          <Dropdown />
          <div className={styles.options}>
            {options.map((option, index) => (
              <Option key={index} title={option.title} link={option.link} />
            ))}
          </div>
          <IoMdBasket
            className={styles.icon}
            onClick={() => dispatch(setShowSidebar())}
          />
          <motion.img
            onClick={() => setShowOptions(!showOptions)}
            whileTap={{ scale: 0.6 }}
            src={"/avatar.png"}
            alt=""
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </div>
      {/* Small Screen */}
      <div className={styles.smallWrapper}>
        <IoMdBasket
          className={styles.icon}
          onClick={() => dispatch(setShowSidebar())}
        />
        <Link href={"/"} className={styles.logo}>
          <Image src={"/logo.png"} width={80} height={80} alt="" />
          <p className={styles.logoText}>Beechwood Baby</p>
        </Link>
        <motion.img
          onClick={() => setShowOptions(!showOptions)}
          whileTap={{ scale: 0.6 }}
          src={"/avatar.png"}
          alt=""
          className="w-10 h-10 mr-2 cursor-pointer"
        />
      </div>
      <div className="flex items-center w-full justify-center gap-6 mt-1 md:hidden ">
        {links.map(({ link, icon }, index) => (
          <Link
            key={index}
            className="flex flex-col-reverse justify-center items-center space-y-1 group"
            href={`/${link}`}
          >
            <p className="capitalize text-sm">{link}</p>
            {icon}
          </Link>
        ))}
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
          <div className={styles.logout}>
            <p>Log Out</p>
            <TbLogout className={styles.logoutIcon} />
          </div>
        </motion.div>
      )}
      {showSidebar && <Sidebar />}
    </div>
  );
}
