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
      body: JSON.stringify({
        id,
      }),
    }
  );
  const product = await response.json();
  return {
    props: {
      product,
    },
  };
};

export default function UpdateProduct({ product }) {
  return (
    <div>
      <p className={styles.heading}>Update Product</p>
      <div>
        <Formik
          initialValues={{
            title: product.title,
            category: product.category,
            size: product.size,
            desc: product.desc,
            color: product.color,
            price: product.price,
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
          }}
          validateOnMount={true}
        >
          {({
            isSubmitting,
            errors,
            touched,
            values,
            handleSubmit,
            isValid,
          }) => <div></div>}
        </Formik>
      </div>
    </div>
  );
}
