import React from "react";

const styles = {
  container: "",
  heading: "w-full",
};

export default function LatestProducts({ latestProducts }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Latest Products</p>
    </div>
  );
}
