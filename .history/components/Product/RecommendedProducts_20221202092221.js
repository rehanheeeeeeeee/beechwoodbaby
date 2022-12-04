import React from "react";
import Product from "../Products/Product";

const styles = {
  container: "my-14",
  heading: "text-headingColor font-semibold text-lg",
};

export default function RecommendedProducts({ relatedProducts }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Related Products</p>
      <div className="flex flex-wrap m-4">
        {relatedProducts.length &&
          relatedProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
