import React from "react";
import { ToastContainer } from "react-toastify";
import Input from "./Input";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  addressForm: "flex flex-col md:grid md:grid-cols-2  md:gap-x-7  w-full",
  heading: "font-semibold text-xl my-2",
};

export default function AddressDetails({
  state,
  city,
  address2,
  address1,
  handleChange,
  pincode,
  district,
}) {
  const inputs = [
    {
      value: city,
      name: "city",
      type: "text",
    },
    {
      value: state,
      name: "state",
      type: "text",
    },
    {
      value: district,
      name: "district",
      type: "text",
    },
    {
      value: pincode,
      name: "pincode",
      type: "number",
    },
    {
      value: address1,
      name: "address1",
      type: "text",
      textArea: true,
    },
    {
      value: address2,
      name: "address2",
      type: "text",
      textArea: true,
    },
  ];

  return (
    <div className="mt-7">
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <p className={styles.heading}>2{")"} AddressDetails</p>
      <div className={styles.addressForm}>
        {inputs.map((input, index) => (
          <Input
            key={index}
            value={input.value}
            name={input.name}
            handleChange={handleChange}
            type={input.type}
            readOnly={input.readOnly}
            textArea={input.textArea}
          />
        ))}
      </div>
      <button
        type="submit"
        className="text-slate-50 bg-headingColor border-0 py-2 px-6 focus:outline-none hover:bg-textColor transition-all ease-in duration-200 rounded-md text-lg"
      >
        Update User Details
      </button>
    </div>
  );
}
