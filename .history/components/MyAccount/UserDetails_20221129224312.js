import React from "react";
import Input from "./Input";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const styles = {
  userInfoform: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
};

export default function UserDetails({ name, phone, email, handleChange }) {
  const inputs = [
    {
      value: name,
      name: "name",
      type: "text",
    },
    {
      value: email,
      name: "email",
      type: "text",
      readOnly: true,
    },
    {
      value: phone,
      name: "phone",
      type: "number",
    },
  ];

  const updateUserDetails = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateUser`, {
      method: "POST",
      body: JSON.stringify({
        email,
        phone,
        username: name,
        updateUserDetails: true,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, {
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
        }
      })
      .catch((error) => {
        toast.error("An Error Occured Please Try Again", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <form onSubmit={updateUserDetails}>
      <p className="font-semibold text-xl my-2">1{")"} User Details</p>
      <div className={styles.userInfoform}>
        {inputs.map((input, index) => (
          <Input
            key={index}
            value={input.value}
            name={input.name}
            handleChange={handleChange}
            type={input.type}
            readOnly={input.readOnly}
          />
        ))}
      </div>
      <button
        type="submit"
        className="text-slate-50 bg-headingColor border-0 py-2 px-6 focus:outline-none hover:bg-textColor transition-all ease-in duration-200 rounded-md text-lg"
      >
        Update User Details
      </button>
    </form>
  );
}
