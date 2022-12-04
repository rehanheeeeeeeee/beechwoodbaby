import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Product from "../Products/Product";
import { motion } from "framer-motion";

const styles = {
  container: "py-12 px-10 md:pl-20 w-full",
  heading: "w-full text-left font-semibold text-3xl",
  wrapper:
    "py-6 flex items-center justify-start w-full overflow-x-scroll scroll-smooth scrollbar-hide",
  icon: "bg-headingColor text-slatw-50 rounded-md",
};

export default function LatestProducts({ latestProducts }) {
  const [scrollValue, setSroll] = useState(0);
  return (
    <div className={styles.container}>
      <div className="flex items-center justify-between">
        <p className={styles.heading}>Our Latest Products</p>
        <div className="hidden md:flex gap-3 items-center">
          <motion.div
            onClick={() => {
              const scrollValue = -220;
              setScroll(scrollValue);
            }}
            whileTap={{ scale: 0.75 }}
            className={styles.icon}
          >
            <MdChevronLeft />
          </motion.div>
          <motion.div
            onClick={() => {
              const scrollValue = 220;
              setScroll(scrollValue);
            }}
            whileTap={{ scale: 0.75 }}
            className={styles.icon}
          >
            <MdChevronRight />
          </motion.div>
        </div>
      </div>
      <div className={styles.wrapper}>
        {latestProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
