import React from "react";
import { BsHandbagFill } from "react-icons/bs";
import { GiHandBag, GiPillow } from "react-icons/gi";
import { IoIosShirt } from "react-icons/io";
import { IoShirt } from "react-icons/io5";
import { MdCrib } from "react-icons/md";

const styles = {
  container: " py-12 w-full px-10",
  heading: "w-full text-left  font-semibold text-3xl ",
  wrapper: "flex space-x-7 py-7 overflow-scroll scrollbar-hide",
  categories:
    "flex flex-col items-center group bg-card shadow-md p-2 justify-center rounded-md min-w-[120px] min-h-[120px] space-y-3 ",
  iconContainer: "text-card bg-headingColor rounded-full p-2",
  linkIcon: "text-xl",
};

export default function OurProdcuts({ categories }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Products</p>
      <div className={styles.wrapper}>
        {categories.map((name, index) => (
          <div key={index} className={styles.categories}>
            <div className={styles.iconContainer}>
              <BsEmojiHeartEyes className={styles.linkIcon} />
            </div>
            <p className="text-md text-center capitalize whitespace-nowrap">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
