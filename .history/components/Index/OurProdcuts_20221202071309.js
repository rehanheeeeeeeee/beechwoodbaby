import React from "react";
import { BsEmojiHeartEye, BsEmojiHeartEyes } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const styles = {
  container: " py-12 w-full px-14 md:px-22 ",
  heading: "w-full text-left  font-semibold text-3xl ",
  wrapper:
    "flex space-x-7  md:justify-center  py-7 overflow-scroll scrollbar-hide",
  categories:
    "flex flex-col justify-center items-center cursor-pointer group bg-card shadow-md p-2 hover:bg-headingColor group-hover:transition-all ease-in duration-200 justify-center rounded-md min-w-[120px] min-h-[120px] space-y-3 ",
  iconContainer:
    "text-card bg-headingColor rounded-full p-2 group-hover:bg-slate-50",
  linkIcon: "text-xl group-hover:text-headingColor",
};

export default function OurProdcuts({ categories }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Products</p>
      <Fade bottom>
        <div className={styles.wrapper}>
          {categories.map((name, index) => (
            <div key={index} className={styles.categories}>
              <div className={styles.iconContainer}>
                <BsEmojiHeartEyes className={styles.linkIcon} />
              </div>
              <p className="text-md group-hover:text-slate-50 text-center capitalize whitespace-nowrap">
                {name}
              </p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
