import React from "react";
import { BsHandbagFill } from "react-icons/bs";
import { GiHandBag, GiPillow } from "react-icons/gi";
import { IoIosShirt } from "react-icons/io";
import { IoShirt } from "react-icons/io5";
import { MdCrib } from "react-icons/md";

const styles = {
  container: " py-12 w-full px-10",
  heading: "w-full text-left font-semibold text-3xl",
  wrapper: "flex",
  categories: "flex flex-col items-center",
};

const icons = [
  <MdCrib className={styles.linkIcon} key={1} />,
  <GiHandBag className={styles.linkIcon} key={2} />,
  <BsHandbagFill className={styles.linkIcon} key={3} />,
  <GiPillow className={styles.linkIcon} key={4} />,
  <IoShirt className={styles.linkIcon} key={5} />,
  <IoIosShirt className={styles.linkIcon} key={6} />,
];

export default function OurProdcuts({ categories }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Products</p>
      <div className={styles.wrapper}>
        {categories.map((name, index) => (
          <div key={index} className={styles.categories}>
            {icons[index]}
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
