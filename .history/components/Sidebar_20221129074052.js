import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../redux/sidebarSlice";
import { motion } from "framer-motion";

const styles = {
  container:
    "fixed bottom-0 top-0 right-0 w-screen md:w-[360px] bg-gray-50 z-10 shadow-lg",
};

export default function Sidebar() {
  const dispatch = useDispatch();

  const SidebarHeader = () => (
    <div className="w-full flex items-center justify-between">
      <MdClose
        className="text-4xl"
        onClick={() => dispatch(setShowSidebar())}
      />{" "}
      <p>Cart</p>
      <button>Clear</button>
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
