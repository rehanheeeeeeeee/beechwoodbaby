import { Disclosure } from "@headlessui/react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const styles = {
  filterContainer: "px-5 hidden md:block",
  category: "font-semibold text-xl text-headingColor py-4",
};

export default function Filter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <>
      <div className={styles.filterContainer}>
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
      <div className="">
        <Disclosure>
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <>
              <Disclosure.Button>
                <div className="flex items-center space-x-5 w-full bg-headingColor text-slate-50 rounded-md p-4">
                  <p>Filter By Category</p>
                  <FiChevronDown
                    className={`${open ? "rotate-180 transform" : ""} `}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel>No</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
