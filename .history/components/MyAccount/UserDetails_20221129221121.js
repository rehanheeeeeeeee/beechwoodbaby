import React from "react";
import Input from "./Input";
const styles = {
  userInfoform: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
};

export default function UserDetails({ name, phone, email, handleChange }) {
  return (
    <form>
      <p className="font-semibold text-xl my-2">1{")"} User Details</p>
      <div className={styles.userInfoform}>
        <Input name={name} label="name" handleChange={handleChange} />
        <Input name={email} label="email" handleChange={handleChange} />
        <Input name={phone} label="phone" handleChange={handleChange} />
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
