import React from "react";
import Input from "./Input";
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
    },
    {
      value: phone,
      name: "phone",
      type: "number",
    },
  ];

  return (
    <form>
      <p className="font-semibold text-xl my-2">1{")"} User Details</p>
      <div className={styles.userInfoform}>
        {inputs.map((input,index) => <Input key={index} value={input.value} name={input.name} handleChange={handleChange} type={input.type}/>)}
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
