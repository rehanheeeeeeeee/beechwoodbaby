import React from "react";

const styles = {
  container: "my-7",
  heading: "text-headingColor font-semibold",
};

export default function RecommendedProducts() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Related Products</p>
    </div>
  );
}
