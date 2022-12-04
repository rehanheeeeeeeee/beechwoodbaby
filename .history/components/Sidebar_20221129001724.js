import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../redux/sidebarSlice";

const styles = {
  container:
    "fixed bottom-0 top-0 right-0 w-screen md:w-[360px] bg-gray-50 z-10 shadow-lg",
};

export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <MdClose
        className="text-4xl"
        onClick={() => dispatch(setShowSidebar())}
      />{" "}
    </div>
  );
}
