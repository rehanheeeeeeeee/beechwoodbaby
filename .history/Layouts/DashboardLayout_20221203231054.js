import React, { useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/dashboard/Sidebar";
import { setShowSidebar } from "../redux/sidebarSlice";
import { setUser } from "../redux/userSlice";

const styles = {
  menuIcon: "text-3xl",
};

export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);
  return (
    <div className="bg-primary w-full justify-between flex flex-col md:flex-row items-center">
      <div className="w-full px-2">
        <div
          onClick={() => dispatch(setShowSidebar())}
          className="md:hidden mx-3 p-1 rounded-md border border-headingColor w-fit cursor-pointer"
        >
          <BiMenu className={styles.menuIcon} />
        </div>
      </div>
      <Sidebar />
      <div className="md:flex-1 w-full">{children}</div>
    </div>
  );
}
