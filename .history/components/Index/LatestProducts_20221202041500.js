import React from "react";
import Product from "../Products/Product";
const styles = {
  container: "py-12 w-full px-5",
  heading: "w-full text-left font-semibold text-2xl",
  wrapper: "py-3",
};

export default function LatestProducts({ latestProducts }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Latest Products</p>
      <div className={styles.wrapper}>
        {latestProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
