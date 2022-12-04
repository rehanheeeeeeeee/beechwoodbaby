import React, { useState } from "react";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { BsFillCloudUploadFill } from "react-icons/bs";
import Image from "next/image";

const styles = {
  imgContainer: `w-full border-dashed relative h-64 border-gray-300
     border-2 p-4 rounded-md flex items-center justify-center text-gray-500 text-lg font-medium flex-col space-y-2`,
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
  input:
    "w-full bg-primary rounded-b border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-textColor py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
  wrapper: "my-2",
  description: `bg-transparent border-dashed text-textColor border-gray-400
    border rounded-md p-2 w-full outline-none`,
  label:
    "h-full w-full flex items-center justify-center text-gray-500 text-lg font-medium flex-col cursor-pointer space-y-2",
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
  <div className="grid w-full grid-cols-1 md:grid-cols-2 md:space-x-3 px-5">
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

const ImageInput = ({ image, images, setImages }) => (
  <div className={styles.imgContainer}>
    {images[image[0]] ? (
      <div>
        <Image
          src={image[1]}
          alt=""
          width={1920}
          height={1080}
          className="w-[85%] h-[85%] object-contain rounded-md"
        />
      </div>
    ) : (
      <>
        <label for="image" className={styles.label}>
          <BsFillCloudUploadFill className={styles.uploadIcon} />
          <p className="text-center">Click Here to Upload Image</p>
        </label>
        <input
          id="image"
          //   name={image[0]}
          className="hidden"
          //   onChange={(e) => console.log(e.target.files[0])}
          type="file"
          accept="image.png, image.gif, image.jpeg, image.jpg, image.svg"
        />
      </>
    )}
  </div>
);

export default function UpdateProduct({ product }) {
  const [images, setImages] = useState(product.images);
  for (let i = 1; i <= 3; i++) {
    if (!Object.entries(images)[i]) {
      if (i == 1) {
        images["image2"] = "";
      } else {
        images["image3"] = "";
      }
    }
  }
  console.log(images);
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
              <div className="flex flex-col p-5">
                <label
                  htmlFor="desc"
                  className="capitalize font-base text-textColor"
                >
                  Description
                </label>
                <Field
                  className={styles.description}
                  component="textarea"
                  name="desc"
                  rows={5}
                />
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-7 px-5">
                {Object.entries(images).map((image, index) => (
                  <ImageInput key={index} image={image} images={images} />
                ))}
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
