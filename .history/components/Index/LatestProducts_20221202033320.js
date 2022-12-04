import React from "react";

const styles = {
  container: "w-full px-9 py-12",
  heading: "w-full",
};

export default function LatestProducts({ latestProducts }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Latest Products</p>
    </div>
  );
}
