import React, { useEffect, useState } from "react";
import Filter from "../components/Products/Filter";
import Product from "../components/Products/Product";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";
import Image from "next/image";

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
    <section className="text-headingColor body-font">
      <p className={styles.heading}>Our Products</p>
      <div className="container p-10 mx-auto flex items-start">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex flex-1 flex-wrap ml-4">
          {products.length ? (
            products.map((product, index) => (
              <Product key={index} product={product} />
            ))
          ) : (
            <div className="flex flex-col items-center p-2 justify-center space-y-5 w-full pt-5">
              <Image
                className="h-64 w-64 object-contain"
                src={"/emptyCart.svg"}
                width={1920}
                height={1080}
                alt=""
              />
              <p className="text-xl text-center">
                Sorry we are out Stock right Now. Please Come Back Later
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
