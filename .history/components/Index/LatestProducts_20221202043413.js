import React from "react";
import Product from "../Products/Product";
const styles = {
  container: "py-12 px-10 md:pl-18 w-full",
  heading: "w-full text-left font-semibold text-3xl",
  wrapper:
    "py-6 flex items-center justify-start w-full overflow-x-scroll scroll-smooth scrollbar-hide",
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
