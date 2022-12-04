import React from "react";

const styles = {
  addressForm: "my-7",
  heading: "font-semibold text-xl my-2",
};

export default function AddressDetails() {
  return (
    <div className={styles.addressForm}>
      <p className={styles.heading}>2{")"} AddressDetails</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-base text-gray-600">
          Name
        </label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-base text-gray-600">
          Name
        </label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
}
