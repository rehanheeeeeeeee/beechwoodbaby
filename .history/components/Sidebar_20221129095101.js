import React from "react";
import { MdArrowBack, MdClearAll, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setShowSidebar } from "../redux/sidebarSlice";
import { motion } from "framer-motion";
import CartProduct from "./Sidebar/CartProduct";
import { clearBasket, selectBasket } from "../redux/cartSlice";
import Image from "next/image";
const styles = {
  container:
    "fixed bottom-0 top-0 right-0 w-full md:w-[360px] bg-gray-50 z-10 shadow-lg",
  clear:
    "mx-1 p-1 flex items-center text-slate-50 bg-headingColor space-x-1 rounded-md",
  wrapper: "bg-cartBg h-full mt-12 p-5 rounded-t-3xl ",
};

export default function Sidebar() {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  const SidebarHeader = () => (
    <div className="flex p-3 items-center justify-between">
      <MdArrowBack
        className="text-3xl"
        onClick={() => dispatch(setShowSidebar())}
      />{" "}
      <p className="font-semibold text-xl">Cart</p>
      <button className={styles.clear} onClick={() => dispatch(clearBasket())}>
        <MdClearAll />
        <p>Clear</p>
      </button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, translateX: 200 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 200 }}
      className={styles.container}
    >
      <SidebarHeader />
      {basket.length ? (
        <div className={styles.wrapper}>
          {basket?.map((item, index) => (
            <CartProduct key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center p-2 justify-center pt-3 space-y-5 w-full h-full">
          <Image
            className="h-64 w-64 object-contain"
            src={"/emptyCart.svg"}
            width={1920}
            height={1080}
            alt=""
          />
          <p className="text-xl text-center">
            Your Cart Is Empty. Go Ahead Add Some Items To your Cart.
          </p>
        </div>
      )}
    </motion.div>
  );
}
