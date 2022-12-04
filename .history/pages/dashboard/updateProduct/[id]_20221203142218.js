import React from "react";
import { Field, Formik } from "formik";
import * as yup from "yup";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
  input:
    "w-full bg-primary rounded-b border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-textColor py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
  wrapper: "my-2",
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

export const inputsArray = [
  [
    {
      name: "title",
      type: "text",
    },
    {
      name: "price",
      type: "text",
    },
  ],
  [
    {
      name: "color",
      type: "text",
    },
    {
      name: "size",
      type: "text",
    },
  ],
];

const InputContianer = ({ inputs }) => (
  <div className="grid w-full grid-cols-1 md:grid-cols-2 md:space-x-3 p-5">
    {inputs.map((input, index) => (
      <div key={index} className={styles.wrapper}>
        <label
          htmlFor={input.name}
          className="capitalize font-base text-textColor"
        >
          {input.name}
        </label>
        <Field name={input.name} type={input.type} className={styles.input} />
      </div>
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
              {inputsArray.map((inputs, index) => (
                <InputContianer key={index} inputs={inputs} />
              ))}
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
