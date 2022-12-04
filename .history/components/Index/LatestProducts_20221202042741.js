import React from "react";
import Product from "../Products/Product";
const styles = {
  container: "py-12 pl-10 ",
  heading: "w-full text-left font-semibold text-2xl",
  wrapper: "py-6 flex items-center overflow-x-scroll scroll-smooth",
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
