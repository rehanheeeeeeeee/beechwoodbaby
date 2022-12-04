import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { MdTitle, MdFormatSize, MdSubtitles } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { FaUniregistry } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";

const styles = {
  container: "p-4",
  formContainer: "p-4 border border-gray-300 rounded-lg ",
  inputContainer:
    "flex items-center space-x-3 border-b my-5 border-gray-300 py-1",
  input: "bg-transparent outline-none font-medium text-lg flex-1",
  inputIcon: "text-2xl text-textColor",
};

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
    icon: <MdTitle className={styles.inputIcon} />,
    type: "text",
  },
  {
    name: "slug",
    placeholder: "Provide a unique Slug for your product..",
    icon: <FaUniregistry className={styles.inputIcon} />,
    type: "text",
  },
  {
    name: "price",
    placeholder: "Price",
    icon: <BiDollar className={styles.inputIcon} />,
    type: "text",
  },
  {
    name: "availableQty",
    placeholder: "Stock of your Product",
    icon: <RiStockFill className={styles.inputIcon} />,
    type: "text",
  },
  {
    name: "size",
    placeholder: "size",
    type: "text",
    icon: <MdFormatSize className={styles.inputIcon} />,
  },
  {
    name: "desc",
    placeholder: "Description",
    type: "text",
    icon: <MdSubtitles className={styles.inputIcon} />,
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
    <div className={styles.inputContainer}>
      {icon}
      <Field
        name={name}
        placeholder={placeholder}
        type={type}
        className={styles.input}
      />
    </div>
  );

export default function Create() {
  const [imageUrls, setImageUrls] = useState({});

  const ImageInput = ({ name }) => (
    <input
      name={name}
      onChange={(e) => handleFile(name, e.target.files[0])}
      type="file"
      accept="image/png, image/gif, image/jpeg image/jpg image.svg"
    />
  );

  const handleFile = (name, file) => {
    const uid = uuid();
    const storageRef = ref(storage, `images/${uid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => console.log(error),
      () => {
        getDownloadURL(storageRef).then((url) => {
          setImageUrls((prevValue) => ({
            ...prevValue,
            [name]: url,
          }));
        });
      }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{
            title: "",
            slug: "",
            price: "",
            category: "",
            availableQty: "",
            size: "",
            desc: "",
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            fetch(`http://localhost:3000/api/addProducts`, {
              method: "POST",
              body: JSON.stringify({ ...values, images: imageUrls }),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          }}
          validateOnMount={true}
          validationSchema={validationSchema}
        >
          {({
            isValid,
            isSubmitting,
            values,
            setFieldValue,
            touched,
            errors,
            handleSubmit,
          }) => (
            <div>
              {inputs.map(
                ({ name, placeholder, icon, type, options }, index) => (
                  <Input
                    key={index}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    icon={icon}
                    options={options}
                  />
                )
              )}
              <ImageInput name="image1" />
              <ImageInput name="image2" />
              <ImageInput name="image3" />
              <button
                className={styles.button}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
