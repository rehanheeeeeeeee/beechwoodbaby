import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { MdTitle, MdFormatSize, MdSubtitles } from "react-icons/md";
import { BiCategoryAlt, BiDollar } from "react-icons/bi";
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
  container: "p-5 flex flex-col items-center",
  formContainer: "p-4 border border-gray-300 rounded-lg ",
  inputContainer:
    "flex items-center space-x-3 border-b my-5 border-gray-300 py-1",
  input: "bg-transparent outline-none font-medium text-lg flex-1",
  inputIcon: "text-2xl text-textColor",
  categoryContainer:
    "w-full p-2 capitalize rounded-md border border-gray-300 shadow-md outline-none text-lg font-medium",
  description:
    "bg-transparent  border-gray-400 border rounded-md p-2 w-full outline-none",
  categoryHeading:
    "flex items-center space-x-3 font-medium text-lg text-gray-400",
};

const validationSchema = yup.object({
  title: yup.string().required().min(3),
  slug: yup.string().required().min(3),
  price: yup.string().required(),
  availableQty: yup.string().required(),
  category: yup.string().required(),
  size: yup.string().required(),
});

const inputs1 = [
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
];
const inputs2 = [
  {
    name: "category",
    type: "select",
    options: ["clothes - girl", "clothes - boys", "Cribs", "Shams", "Purses"],
  },
];
const inputs3 = [
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
];
const inputs4 = [
  {
    name: "size",
    placeholder: "size",
    type: "text",
    icon: <MdFormatSize className={styles.inputIcon} />,
  },
];

const Input = ({ options, name, placeholder, icon, type }) =>
  type === "select" ? (
    <div className="space-y-2">
      <div className={styles.categoryHeading}>
        <BiCategoryAlt className={styles.inputIcon} />
        <p>Category</p>
      </div>
      <Field as={type} name={name} className={styles.categoryContainer}>
        {options.map((option, index) => (
          <option className={styles.category} key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
    </div>
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

  const Description = () => (
    <div className="space-y-1 py-5">
      <div className="flex items-center text-lg text-gray-400 font-medium space-x-3">
        <MdSubtitles className={styles.inputIcon} />
        <p>Description</p>
      </div>
      <Field
        className={styles.description}
        component="textarea"
        name="desc"
        rows={5}
        placeholder="Type your product's Description here"
      />
    </div>
  );

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
            <div className="">
              <div className="grid md:grid-cols-2 md:gap-10 space-y-5 mb-7">
                {inputs1.map(
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
              </div>
              {inputs2.map(
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
              <div className="grid md:grid-cols-2 md:gap-10 my-5">
                {inputs3.map(
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
              </div>
              <div className="">
                {inputs4.map(
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
              </div>
              <Description />
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
