import { Checkbox, FormControlLabel } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";

const styles = {
  filterContainer: "px-5",
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
                  color={"error"}
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
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
