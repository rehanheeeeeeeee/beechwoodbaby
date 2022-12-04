import React from "react";
import { Field, Formik } from "formik";
import * as yup from "yup";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
  input:
    "w-full bg-primary rounded-t border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-textColor py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
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

const updateProductSchema = yup.object({
  title: yup.string().required(),
  category: yup.string().required(),
  size: yup.string().required(),
  desc: yup.string().required(),
  color: yup.string().required(),
  price: yup.string().required(),
});

export const inputs1 = [
  {
    name: "title",
    type: "text",
  },
  {
    name: "price",
    type: "text",
  },
];

const InputContianer = ({ inputs }) => (
  <div className="flex flex-wrap w-full space-x-3">
    {inputs.map((input, index) => (
      <Field
        key={index}
        name={input.name}
        type={input.type}
        className={styles.input}
      />
    ))}
  </div>
);

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
          validationSchema={updateProductSchema}
        >
          {({
            isSubmitting,
            errors,
            touched,
            values,
            handleSubmit,
            isValid,
          }) => (
            <div>
              <InputContianer inputs={inputs1} />
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
