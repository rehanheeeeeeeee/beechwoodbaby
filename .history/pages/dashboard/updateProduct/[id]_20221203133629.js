import React from "react";
import { Formik } from "formik";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

export default function UpdateProduct() {
  return (
    <div>
      <p className={styles.heading}>Update Product</p>
      <div>
        <Formik initialValues={{ title: "", category: "", size: "", desc: "" }}>
          {({ isSubmitting, errors, touched, values }) => <div></div>}
        </Formik>
      </div>
    </div>
  );
}
