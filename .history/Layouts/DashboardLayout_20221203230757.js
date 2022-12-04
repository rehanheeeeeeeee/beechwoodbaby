import React, { useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/dashboard/Sidebar";
import { setUser } from "../redux/userSlice";

const styles = {
  menuIcon: "text-3xl",
};

export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();
  const showSidebar = useSelector(selectShowSidebar);

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);
  return (
    <div className="bg-primary w-full justify-between flex flex-col md:flex-row items-center">
      <div className="w-full p-2">
        <div className="md:hidden p-1 rounded-md border border-headingColor w-fit">
          <BiMenu className={styles.menuIcon} />
        </div>
      </div>
      <Sidebar />
      <div className="md:flex-1 w-full">{children}</div>
    </div>
  );
}
