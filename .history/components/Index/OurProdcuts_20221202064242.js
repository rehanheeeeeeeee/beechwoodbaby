import React from "react";
import { BsHandbagFill } from "react-icons/bs";
import { GiHandBag, GiPillow } from "react-icons/gi";
import { IoShirt } from "react-icons/io5";
import { MdCrib } from "react-icons/md";

const styles = {
  container: " py-12 w-full px-10",
  heading: "w-full text-left font-semibold text-3xl",
  categories: "flex items-center",
};

const icons = [
  <MdCrib className={styles.linkIcon} key={1} />,
  <GiHandBag className={styles.linkIcon} key={2} />,
  <BsHandbagFill className={styles.linkIcon} key={3} />,
  <GiPillow className={styles.linkIcon} key={4} />,
  <IoShirt className={styles.linkIcon} key={5} />,
];

export default function OurProdcuts({ categories }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Products</p>
      <div>
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
