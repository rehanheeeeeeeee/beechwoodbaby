import React from "react";

const styles = {
  input:
    "w-full bg-primary rounded border border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-textColor py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
};

export default function Contact() {
  return (
    <section className="text-textColor body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-headingColor">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-textColor">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-textColor">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-textColor"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={styles.input}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
