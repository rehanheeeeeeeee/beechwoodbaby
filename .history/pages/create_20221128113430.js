import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { MdTitle, MdFormatSize, MdSubtitles } from "react-icons/md";
import { BiCategoryAlt, BiDollar, BiTrash } from "react-icons/bi";
import { FaUniregistry } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";
import Image from "next/image";
import { MotionConfig } from "framer-motion";

const styles = {
  container: "p-5 flex flex-col items-center",
  formContainer: "p-4 border border-gray-300 rounded-lg w-full",
  inputContainer:
    "flex items-center space-x-3 border-b my-5 border-gray-300 py-1",
  input: "bg-transparent outline-none font-medium text-lg flex-1",
  inputIcon: "text-2xl text-textColor",
  categoryContainer:
    "w-full p-2 capitalize rounded-md border border-gray-300 shadow-md outline-none text-lg font-medium",
  description:
    "bg-transparent border-dashed border-gray-400 border rounded-md p-2 w-full outline-none",
  categoryHeading:
    "flex items-center space-x-3 font-medium text-lg text-gray-400",
  imageUpload:
    "w-full border-dashed relative h-64 border-gray-300 border-2 p-4 rounded-md flex items-center justify-center text-gray-500 text-lg font-medium flex-col space-y-2",
  uploadIcon: "text-3xl",
  button:
    "my-6 w-full md:w-32 rounded-md hover:bg-green-600 transtion-all ease-in duration-200 bg-green-500 p-2 text-white font-semibold text-lg disabled:bg-gray-400",
  label:
    "h-full w-full flex items-center justify-center text-gray-500 text-lg font-medium flex-col cursor-pointer space-y-2",
  delete:
    "bg-red-500 text-white text-2xl hover:bg-red-600 transtion-all ease-in duration-200 cursor-pointer absolute right-max bottom-4 left-max p-2 rounded-full",
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

const Input = ({ options, name, placeholder, icon, type, errors, touched }) => {
  return type === "select" ? (
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
    <>
      <div className={styles.inputContainer}>
        {icon}
        <Field
          name={name}
          placeholder={placeholder}
          type={type}
          className={styles.input}
        />
      </div>
    </>
  );
};

export default function Create() {
  const [imageUrls, setImageUrls] = useState({});

  const ImageInput = ({ name }) => (
    <div className={styles.imageUpload}>
      {imageUrls[name] ? (
        <>
          <Image
            src={imageUrls[name]}
            alt=""
            width={300}
            height={300}
            className="w-[85%] h-[85%] object-contain rounded-md"
          />
          <div className={styles.delete} onClick={() => deleteImage(name)}>
            <BiTrash className={styles.deleteIcon} />
          </div>
        </>
      ) : (
        <>
          <label for="image" className={styles.label}>
            <BsFillCloudUploadFill className={styles.uploadIcon} />
            <p className="text-center">Click Here to Upload Image</p>
          </label>
          <input
            id="image"
            name={name}
            className="hidden"
            onChange={(e) => handleFile(name, e.target.files[0])}
            type="file"
            accept="image/png, image/gif, image/jpeg image/jpg image.svg"
          />
        </>
      )}
    </div>
  );

  const deleteImage = (name) => {
    const deleteRef = ref(storage, imageUrls[name]);
    deleteObject(deleteRef)
      .then(() => console.log("success"))
      .catch((error) => console.log(error.message));
    setImageUrls((prevValue) => ({ ...prevValue, [name]: "" }));
  };

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

  const Description = ({ erros, touched }) => (
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
        placeholder="Type your prjoduct's Description here"
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
              {console.log(errors)}
              <p className="w-full mt-4 mb-7 text-center font-bold text-3xl">
                Add Product
              </p>
              <div className="grid md:grid-cols-2 md:gap-10 gap-2 mb-7">
                {inputs1.map(
                  ({ name, placeholder, icon, type, options }, index) => (
                    <Input
                      key={index}
                      name={name}
                      errors={errors}
                      touched={touched}
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
                    errors={errors}
                    touched={touched}
                    placeholder={placeholder}
                    icon={icon}
                    options={options}
                  />
                )
              )}
              <div className="grid md:grid-cols-2 md:gap-10 gap-2 my-7">
                {inputs3.map(
                  ({ name, placeholder, icon, type, options }, index) => (
                    <Input
                      key={index}
                      name={name}
                      errors={errors}
                      touched={touched}
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
                      errors={errors}
                      touched={touched}
                      type={type}
                      placeholder={placeholder}
                      icon={icon}
                      options={options}
                    />
                  )
                )}
              </div>
              <Description errors={errors} touched={touched} />
              <div className="flex flex-col md:place-items-center md:grid md:grid-cols-2 lg:flex lg:flex-row gap-7">
                <ImageInput name="image1" />
                <ImageInput name="image2" />
                <ImageInput name="image3" />
              </div>
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
