import { Checkbox } from "@mui/material";
import React from "react";

const styles = {
  container: "",
  category: "font-medium text-md",
};

export default function Filter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className={styles.filterContainter}>
      <div className={styles.wrapper}>
        <p className={styles.category}>Catgories</p>
        <div>
          {categories.map((category, index) => (
            <Checkbox
              key={index}
              label={category}
              checked={category === selectedCategory}
              onChange={() => setSelectedCategory(category)}
              inputProps={{ "aria-label": "controlled" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
