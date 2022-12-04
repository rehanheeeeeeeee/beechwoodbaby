import React from "react";

const styles = {
  container: " py-12 w-full px-10",
  heading: "w-full text-left font-semibold text-3xl",
};

export default function OurProdcuts({ categories }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Products</p>
      <div>
        {categories.map((name, index) => (
          <div key={index}>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
