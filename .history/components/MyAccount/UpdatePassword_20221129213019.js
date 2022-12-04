import React from "react";

const styles = {
  updatePassform: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
};

export default function UpdatePassword({
  newPassword,
  confirmNewPassword,
  handleChange,
}) {
  return (
    <form className="mt-6">
      <p className="font-semibold text-xl my-2">3{")"} Update Password</p>
      <div className={styles.updatePassform}>
        <div className="relative mb-4">
          <label
            for="newPassword"
            className="leading-7 text-base text-gray-600"
          >
            New Password
          </label>
          <input
            value={newPassword}
            onChange={handleChange}
            type="text"
            id="newPassword"
            name="newPassword"
            className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            for="confirmNewPassword"
            className="leading-7 text-base text-gray-600"
          >
            Confirm New Password
          </label>
          <input
            value={confirmNewPassword}
            onChange={handleChange}
            type="text"
            id="confirmNewPassword"
            name="confirmNewPassword"
            className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
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
