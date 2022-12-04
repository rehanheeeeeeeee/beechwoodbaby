import React from "react";
import { BsEmojiHeartEye, BsEmojiHeartEyes } from "react-icons/bs";

const styles = {
  container: " py-12 w-full px-10",
  heading: "w-full text-left  font-semibold text-3xl ",
  wrapper: "flex space-x-7 py-7 overflow-scroll scrollbar-hide",
  categories:
    "flex flex-col items-center group bg-card shadow-md p-2 justify-center rounded-md min-w-[120px] min-h-[120px] space-y-3 ",
  iconContainer: "text-card bg-headingColor rounded-full p-2",
  linkIcon: "text-xl group-hover:text-headingColor",
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
            <p className="text-md groupd-hover:text-slate-50 text-center capitalize whitespace-nowrap">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
