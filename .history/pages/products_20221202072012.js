import React from "react";
import Filter from "../components/Products/Filter";
import Product from "../components/Products/Product";
import { collection } from "firebase/firestore";
import { db } from "../firebase";

export const getServerSideProps = (context) => {
  const colRef = collection(db, "categories");
};

export default function Products() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Filter />
        <div className="flex flex-wrap -m-4"></div>
      </div>
    </section>
  );
}
