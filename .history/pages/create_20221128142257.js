import React, { useState } from "react";
import { Formik, Field } from "formik";
import { MdSubtitles } from "react-icons/md";
import { BiCategoryAlt, BiTrash } from "react-icons/bi";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";
import Image from "next/image";
import { formSchema } from "../components/Create/FormSchema";
import { inputs1 } from "../components/Create/Data";
import { inputs2 } from "../components/Create/Data";
import { inputs3 } from "../components/Create/Data";
import { inputs4 } from "../components/Create/Data";
import { Input } from "../components/Create/Input";

const styles = {
  container: "p-5 flex flex-col items-center",
  formContainer: "p-4 border border-gray-300 rounded-lg w-full",
  description: (error, touched) =>
    `bg-transparent border-dashed ${
      error && touched ? "border-red-400" : "border-gray-400"
    } border rounded-md p-2 w-full outline-none`,

  imageUpload: (noImages) =>
    `w-full border-dashed relative h-64 ${
      noImages ? "border-red-400" : "border-gray-300"
    } border-2 p-4 rounded-md transition-all ease-in duration-200 flex items-center justify-center text-gray-500 text-lg font-medium flex-col space-y-2`,
  uploadIcon: "text-3xl",
  button:
    "my-6 w-full md:w-32 rounded-md hover:bg-green-600 transtion-all ease-in duration-200 bg-green-500 p-2 text-white flex items-center cursor-pointer justify-center font-semibold text-lg",
  label:
    "h-full w-full flex items-center justify-center text-gray-500 text-lg font-medium flex-col cursor-pointer space-y-2",
  delete:
    "bg-red-500 text-white text-2xl hover:bg-red-600 transtion-all ease-in duration-200 cursor-pointer absolute right-max bottom-4 left-max p-2 rounded-full",
};

export default function Create() {
  const [imageUrls, setImageUrls] = useState({});
  const [noImages, setNoImages] = useState(false);

  const ImageInput = ({ name }) => (
    <div className={styles.imageUpload(noImages)}>
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
          noImages && setNoImages(false);
          setImageUrls((prevValue) => ({
            ...prevValue,
            [name]: url,
          }));
        });
      }
    );
  };

  const Description = ({ errors, touched }) => (
    <div className="space-y-1 py-5">
      <div className="flex items-center text-lg text-gray-400 font-medium space-x-3">
        <MdSubtitles className={styles.inputIcon} />
        <p>Description</p>
      </div>
      <Field
        className={styles.description(errors.desc, touched.desc)}
        component="textarea"
        name="desc"
        rows={5}
        placeholder="Type your prjoduct's Description here"
      />
    </div>
  );

  return (
    <div className={styles.container}>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={styles.formContainer}>
        <Formik
          initialValues={{
            title: "",
            slug: "",
            price: "",
            category: "clothes - girl",
            availableQty: "",
            size: "",
            desc: "",
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            setSubmitting(true);
            console.log("I ran");
            console.log(values);
            fetch(`http://localhost:3000/api/addProducts`, {
              method: "POST",
              body: JSON.stringify({ ...values, images: imageUrls }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (!data.success) {
                  toast.error(data.message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                } else {
                  toast.success("Product Added Successfully", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }
                setSubmitting(false);
                resetForm({
                  title: "",
                  slug: "",
                  price: "",
                  category: "clothes - girl",
                  availableQty: "",
                  size: "",
                  desc: "",
                });
              });
          }}
          validateOnMount={true}
          validationSchema={formSchema}
        >
          {({ isValid, isSubmitting, touched, errors, handleSubmit }) => (
            <div className="">
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
                disabled={isSubmitting}
                onClick={
                  isValid
                    ? !imageUrls.image1 &&
                      !imageUrls.image2 &&
                      !imageUrls.image3
                      ? () => {
                          setNoImages(true);
                          toast.error(
                            "Please Provide Atleast One Image of the Product",
                            {
                              position: "top-left",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                            }
                          );
                        }
                      : handleSubmit
                    : () =>
                        toast.error(
                          "Form is not Valid Please fill out All the Details",
                          {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                          }
                        )
                }
              >
                {isSubmitting ? (
                  <div class="flex justify-center items-center">
                    <div
                      class="spinner-border animate-spin inline-block w-5 h-5 border-2 rounded-full"
                      role="status"
                    >
                      <span class="visually-hidden"></span>
                    </div>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
