import { useRouter } from "next/router";
import React, { useEffect } from "react";

const styles = {
  heading: "my-5 text-center font-extrabold text-2xl md:text-4xl",
  userInfoform: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
};

export default function MyAccount() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className="p-5">
      <p className={styles.heading}>ACCOUNT DETAILS</p>
      <form>
        <p></p>
        <div className={styles.userInfoform}>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-base text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-base text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="number" className="leading-7 text-base text-gray-600">
              Phone
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-slate-50 bg-headingColor border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
        >
          Update User Details
        </button>
      </form>
    </div>
  );
}
