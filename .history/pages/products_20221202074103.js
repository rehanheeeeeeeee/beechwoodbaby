import React, { useEffect, useState } from "react";
import Filter from "../components/Products/Filter";
import Product from "../components/Products/Product";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getServerSideProps = async (context) => {
  const colRef = collection(db, "categories");
  const snap = await getDocs(colRef);
  const categories = [];
  snap.forEach((doc) => {
    categories.push(doc.data().name);
  });
  categories.unshift("All Categories");
  return {
    props: {
      categories,
    },
  };
};

export default function Products({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {}, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex flex-wrap -m-4"></div>
      </div>
    </section>
  );
}
