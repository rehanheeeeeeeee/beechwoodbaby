import React from "react";

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
  ];

  return (
    <div className="mt-7">
      <p className={styles.heading}>2{")"} AddressDetails</p>
      <div className={styles.addressForm}>
        <div className="relative mb-4 flex flex-col justify-center">
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
        <div className="relative mb-4 flex flex-col justify-center items-center">
          <label
            for="city"
            className="leading-7 text-left w-full text-base text-gray-600"
          >
            City
          </label>
          <input
            value={city}
            onChange={handleChange}
            type="text"
            id="city"
            name="city"
            className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4 flex flex-col justify-center items-center">
          <label
            htmlFor="district"
            className="leading-7 text-left w-full text-base text-gray-600"
          >
            District
          </label>
          <input
            value={district}
            onChange={handleChange}
            type="text"
            id="district"
            name="district"
            className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            for="pincode"
            className="leading-7 w-full text-base text-gray-600"
          >
            Pincode
          </label>
          <input
            value={pincode}
            onChange={handleChange}
            type="number"
            id="pincode"
            name="pincode"
            className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="address1" className="leading-7 text-base text-gray-600">
            Address 1
          </label>
          <textarea
            value={address1}
            onChange={handleChange}
            type="text"
            id="address1"
            name="address1"
            className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="address2" className="leading-7 text-base text-gray-600">
            Address 2
          </label>
          <textarea
            value={address2}
            onChange={handleChange}
            type="text"
            id="address2"
            name="address2"
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
    </div>
  );
}
