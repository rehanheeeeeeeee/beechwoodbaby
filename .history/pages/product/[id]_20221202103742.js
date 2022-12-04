import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Product/Carousel";
import { addToBasket, clearBasket, selectBasket } from "../../redux/cartSlice";
import { setShowSidebar } from "../../redux/sidebarSlice";
import { motion } from "framer-motion";
import { Router, useRouter } from "next/router";
import RecommendedProducts from "../../components/Product/RecommendedProducts";
import Image from "next/image";

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProductsById`,
    {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    }
  );
  const product = await response.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getProducts`, {
    method: "POST",
    body: JSON.stringify({
      category: product.category,
      limit: 4,
    }),
  });
  const relatedProducts = await res.json();
  return {
    props: {
      product,
      relatedProducts,
    },
  };
};

const styles = {
  imgContianer:
    "lg:w-1/2 w-full max-w-[450px] space-y-5  lg:h-auto rounded bg-primary flex flex-col items-center relative my-5",
};

export default function Product({ product, relatedProducts }) {
  const { _id, size, title, images, price, category } = product;
  const color = product.color.toLowerCase();
  const dispatch = useDispatch();
  const productImages = Object.values(images);
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const router = useRouter();
  const addToCart = () => {
    dispatch(
      addToBasket({
        id: _id,
        title,
        images,
        price,
        color,
        category,
        size,
        quantity: 1,
      })
    );
    dispatch(setShowSidebar());
  };

  const buyNow = () => {
    dispatch(clearBasket());
    dispatch(
      addToBasket({
        id: _id,
        title,
        images,
        price,
        color,
        category,
        size,
        quantity: 1,
      })
    );
    router.push("/checkout");
  };

  return (
    <section className="text-gray-400 bg-primary body-font overflow-hidden">
      <div className="container px-5 md:px-10 lg:px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
          <div className={styles.imgContianer}>
            <div className="h-full w-full flex justify-center">
              <Image
                width={1920}
                height={1080}
                className="h-full shadow-md object-center rounded-md w-full flex justify-center"
                alt="product image"
                src={selectedImage}
              />
            </div>
            <div className="flex items-center space-x-5">
              {productImages.map((image, index) => (
                <Image
                  key={index}
                  alt=""
                  src={image}
                  height={1920}
                  width={1080}
                  onClick={() => setSelectedImage(image)}
                  className={`${
                    image === selectedImage && "border-2 border-headingColor"
                  } w-24 h-24 rounded-md`}
                />
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: 500 }}
            animate={{
              opacity: 1,
              translateX: 0,
              animationDelay: 1000,
              animationDuration: 1000,
            }}
            className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-5"
          >
            <h2 className="text-sm capitalize title-font text-gray-500 tracking-widest">
              {category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 space-x-10">
              <div className="flex items-center">
                <p className="text-headingColor mr-2">Color : </p>
                <p className="capitalize mr-1 text-gray-700">{color} - </p>
                <div
                  className={`p-2 ${color == "pink" && "bg-pink-500"}  ${
                    color == "blue" && "bg-blue-500"
                  }  ${color == "amber" && "bg-amber-200"}  ${
                    color == "black" && "bg-black"
                  }  ${
                    color == "white" && "bg-white"
                  }  rounded-full border-black w-4 h-4 border`}
                ></div>
              </div>
              <div className="flex items-center space-x-2 text-headingColor">
                <p>Size -</p>
                <span className="p-0.5 text-sm flex justify-center items-center border border-headingColor">
                  {size.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium md:text-2xl text-xl  text-gray-900 whitespace-nowrap">
                {price.toFixed(2)} BHD
              </span>
              <button
                onClick={buyNow}
                className="flex ml-auto text-white bg-gradient-to-tr from-green-400 to-green-600 border-0 py-2 px-3 transition-all ease-in duration-100 focus:outline-none hover:shadow-lg whitespace-nowrap shadow-sm rounded"
              >
                Buy Now
              </button>
              <button
                onClick={addToCart}
                className="flex ml-2 md:ml-4 text-white bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in duration-100 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 hover:shadow-lg shadow-sm whitespace-nowrap  rounded"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
        <RecommendedProducts relatedProducts={relatedProducts} />
      </div>
    </section>
  );
}
