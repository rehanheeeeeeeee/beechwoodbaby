import React from "react";
import { MdArrowBack, MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../redux/sidebarSlice";
import { motion } from "framer-motion";

const styles = {
  container:
    "fixed bottom-0 top-0 right-0 w-full md:w-[360px] bg-gray-50 z-10 shadow-lg",
  clear: "",
};

export default function Sidebar() {
  const dispatch = useDispatch();

  const SidebarHeader = () => (
    <div className="flex p-2 items-center justify-between">
      <MdArrowBack
        className="text-3xl"
        onClick={() => dispatch(setShowSidebar())}
      />{" "}
      <p className="font-semibold text-xl">Cart</p>
      <button className={styles.clear}>Clear</button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, translateX: 200 }}
      animate={{ opacity: 1, translateX: 0 }}
      className={styles.container}
    >
      <SidebarHeader />
    </motion.div>
  );
}
