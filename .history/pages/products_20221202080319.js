import React, { useEffect, useState } from "react";
import Filter from "../components/Products/Filter";
import Product from "../components/Products/Product";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const category = context.query.category;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: category }),
    }
  );
  const products = await response.json();
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
      products,
    },
  };
};

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

export default function Products({ categories, products }) {
  console.log(products);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const router = useRouter();
  useEffect(() => {
    router.push(`/products?category=${selectedCategory}`, undefined, {
      scroll: false,
    });
  }, [selectedCategory]);

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
