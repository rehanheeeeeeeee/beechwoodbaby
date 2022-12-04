import { Checkbox, FormControlLabel } from "@mui/material";
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
        <div className="flex flex-col">
          {categories.map((category, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={category === selectedCategory}
                  onChange={() => setSelectedCategory(category)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
