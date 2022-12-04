import React from "react";
import { Formik } from "formik";

const Input = () => <div></div>;

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
      ></Formik>
    </div>
  );
}
