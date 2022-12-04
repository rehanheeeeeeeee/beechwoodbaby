import React from "react";

const styles = {
  container: "",
  category: "font-medium text-md",
};

export default function Filter({ categories }) {
  return (
    <div className={styles.filterContainter}>
      <div className={styles.wrapper}>
        <p className={styles.category}>Catgories</p>
        <div></div>
      </div>
    </div>
  );
}
