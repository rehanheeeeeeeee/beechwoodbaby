import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Product/Carousel";
import { addToBasket, selectBasket } from "../../redux/cartSlice";
import { setShowSidebar } from "../../redux/sidebarSlice";
import { motion } from "framer-motion";

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
  return {
    props: {
      product,
    },
  };
};

export default function Product({ product }) {
  const { _id, size, title, images, price, category } = product;
  const color = product.color.toLowerCase();
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addToBasket({
        id: _id,
        title,
        images,
        price,
        category,
        size,
        quantity: 1,
      })
    );
    dispatch(setShowSidebar());
  };

  return (
    <section className="text-gray-400 bg-primary body-font overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Carousel images={Object.values(images)} />
          <motion.div
            initial={{ opacity: 0, translateX: 500 }}
            animate={{
              opacity: 1,
              translateX: 0,
              animationDelay: 500,
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
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {price.toFixed(2)} BHD
              </span>
              <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-3 transition-all ease-in duration-100 focus:outline-none hover:bg-green-600 rounded">
                Buy Now
              </button>
              <button
                onClick={addToCart}
                className="flex ml-4 text-white bg-orange-500 transition-all ease-in duration-100 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
