import React, { useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Sidebar from "../components/dashboard/Sidebar";
import { setUser } from "../redux/userSlice";

export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);
  return (
    <div className="bg-primary w-full justify-between flex flex-col md:flex-row items-center">
      <div className="md:hidden">
        <BiMenu />
      </div>
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
