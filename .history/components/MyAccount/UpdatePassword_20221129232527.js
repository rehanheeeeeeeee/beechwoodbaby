import React from "react";
import Input from "./Input";

const styles = {
  updatePassform: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
};

export default function UpdatePassword({
  newPassword,
  confirmNewPassword,
  handleChange,
}) {
  const inputs = [
    {
      value: newPassword,
      name: "name",
      type: "password",
    },
    {
      value: confirmNewPassword,
      name: "confirmNewPassword",
      type: "password",
    },
  ];
  return (
    <form className="mt-6">
      <p className="font-semibold text-xl my-2">3{")"} Update Password</p>
      <div className={styles.updatePassform}>
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
        Update Password
      </button>
    </form>
  );
}
