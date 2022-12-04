import React, { useState } from "react";
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
  category: yup.string().required(),
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
  {
    name: "category",
    type: "select",
    options: ["clothes - girl", "clothes - boys", "Cribs", "Shams", "Purses"],
  },
];

const Input = ({ options, name, placeholder, icon, type }) =>
  type === "select" ? (
    <Field as={type} name={name}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Field>
  ) : (
    <div className={styles.container}>
      {icon}
      <Field name={name} placeholder={placeholder} type={type} />
    </div>
  );

export default function Create() {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          slug: "",
          price: "",
          category: "",
          availableQty: "",
          image: "",
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
            {inputs.map(({ name, placeholder, icon, type, options }, index) => (
              <Input
                key={index}
                name={name}
                type={type}
                placeholder={placeholder}
                icon={icon}
                options={options}
              />
            ))}
            <input
              onChange={(e) => handleFile(e.target.files[0])}
              type="file"
              accept="image/png, image/gif, image/jpeg image/jpg image.svg"
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}
