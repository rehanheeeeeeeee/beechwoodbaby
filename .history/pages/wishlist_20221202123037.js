import React from "react";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

export default function Wishlist() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Wishlist</p>
    </div>
  );
}
