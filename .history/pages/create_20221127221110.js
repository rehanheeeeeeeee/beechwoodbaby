import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const Input = () => <div></div>;

const validationSchema = yup.object({
  title: yup.string().required().min(3),
  slug: yup.string().required().min(3),
  price: yup.string().required(),
  absoluteQty: yup.string().required(),
  category: yup.string().required(),
  size: yup.string().required(),
});

export default function Create() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          slug: "",
          price: "",
          category: "",
          avalaibleQty: "",
          size: "",
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
        }}
        validateOnMount={true}
        validationSchema={validationSchema}
      >
        {({
          values,
          handlleChange,
          handleBlur,
          isValid,
          isSubmitting,
          touched,
          errors,
        }) => <div></div>}
      </Formik>
    </div>
  );
}
