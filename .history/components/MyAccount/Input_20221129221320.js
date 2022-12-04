import React from "react";

export default function Input({ name, type, label, handleChange }) {
  return (
    <div className="relative mb-4">
      <label
        htmlFor={label}
        className="leading-7 text-base text-gray-600 capitalize"
      >
        {label}
      </label>
      <input
        value={name}
        onChange={handleChange}
        type={type}
        id={label}
        name={label}
        className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}
