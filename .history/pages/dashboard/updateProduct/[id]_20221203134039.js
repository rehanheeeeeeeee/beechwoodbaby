import React from "react";
import { Formik } from "formik";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProductsById`,
    {
      method: "POST",
      body: {
        id,
      },
    }
  );
};

export default function UpdateProduct() {
  return (
    <div>
      <p className={styles.heading}>Update Product</p>
      <div>
        <Formik
          initialValues={{
            title: "",
            category: "",
            size: "",
            desc: "",
            color: "",
            price: "",
          }}
        >
          {({ isSubmitting, errors, touched, values }) => <div></div>}
        </Formik>
      </div>
    </div>
  );
}
