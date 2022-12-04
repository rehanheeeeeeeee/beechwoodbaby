import React from "react";

const styles = {
  addressForm: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
  heading: "font-semibold text-xl my-2",
};

export default function AddressDetails({
  state,
  city,
  address2,
  address1,
  handleChange,
  pincode,
}) {
  return (
    <div className="mt-7">
      <p className={styles.heading}>2{")"} AddressDetails</p>
      <div className={styles.addressForm}>
        <div className="relative mb-4">
          <label for="state" className="leading-7 text-base text-gray-600">
            State
          </label>
          <input
            value={state}
            onChange={handleChange}
            type="text"
            id="state"
            name="state"
            className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
