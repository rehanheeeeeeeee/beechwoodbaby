import React from "react";

const styles = {
  container: "w-full px-10 py-12",
  heading: "w-full font-semibold text-lg",
};

export default function LatestProducts({ latestProducts }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Latest Products</p>
    </div>
  );
}
