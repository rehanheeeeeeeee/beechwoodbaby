import React from "react";
import Product from "../Products/Product";
const styles = {
  container: "pl-10 py-12",
  heading: "w-full font-semibold text-2xl",
  wrapper: "py-3 flex items-center overflow-scroll w-full",
};

export default function LatestProducts({ latestProducts }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Latest Products</p>
      <div className={styles.wrapper}>
        {latestProducts.map((product, index) => (
          <Product key={index} product={product} widthFix={true} />
        ))}
      </div>
    </div>
  );
}
