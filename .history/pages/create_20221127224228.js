import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { MdTitle, MdFormatSize } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { FaUniregistry } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

const styles = {};

const validationSchema = yup.object({
  title: yup.string().required().min(3),
  slug: yup.string().required().min(3),
  price: yup.string().required(),
  availableQty: yup.string().required(),
  //   category: yup.string().required(),
  size: yup.string().required(),
});

const inputs = [
  {
    name: "title",
    placeholder: "Write your products title here...",
    icon: <MdTitle />,
    type: "text",
  },
  {
    name: "slug",
    placeholder: "Provide a unique Slug for your product..",
    icon: <FaUniregistry />,
    type: "text",
  },
  {
    name: "price",
    placeholder: "Price",
    icon: <BiDollar />,
    type: "text",
  },
  {
    name: "availableQty",
    placeholder: "Stock of your Product",
    icon: <RiStockFill />,
    type: "text",
  },
  {
    name: "size",
    placeholder: "size",
    type: "text",
    icon: <MdFormatSize />,
  },
];

const Input = ({ name, placeholder, icon, type }) => (
  <div className={styles.container}>
    {icon}
    <Field name={name} placeholder={placeholder} type={type} />
  </div>
);

export default function Create() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          slug: "",
          price: "",
          category: "",
          availableQty: "",
          size: "",
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
        }}
        validateOnMount={true}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting, touched, errors, handleSubmit }) => (
          <div>
            {inputs.map(({ name, placeholder, icon, type }, index) => (
              <Input
                key={index}
                name={name}
                type={type}
                placeholder={placeholder}
                icon={icon}
              />
            ))}
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}
