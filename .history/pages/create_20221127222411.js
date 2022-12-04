import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {MdTitle} from 'react-icons/md'
import {BiDollar} from 'react-icons/bi'
import {FaUniregistry} from 'react-icons/fa'
const Input = () => <div></div>;

const validationSchema = yup.object({
  title: yup.string().required().min(3),
  slug: yup.string().required().min(3),
  price: yup.string().required(),
  absoluteQty: yup.string().required(),
  category: yup.string().required(),
  size: yup.string().required(),
});

const inputs = [
    {
      name:'title',
      placeholder:'Write your products title here...',
      icon:<MdTitle/>
    },
    {
      name:'slug',
      placeholder:'Provide a unique Slug for your product..',
      icon:<FaUniregistry/>
    },
    {
      name:'price',
      placeholder:'Price',
      icon:<BiDollar/>
    },
    {
        name:'availableQty',
        placeholder:'Stock of your Product',
        icon:<BiDollar/>
      },
  ]

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
        }) => <div>
            </div>}
      </Formik>
    </div>
  );
}
