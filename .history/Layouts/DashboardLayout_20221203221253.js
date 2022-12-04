import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../components/dashboard/Sidebar";
import { setUser } from "../redux/userSlice";

export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);
  return (
    <div className="bg-primary w-full flex items-center">
      <Sidebar />
      <div clasdName="flex-1">{children}</div>
    </div>
  );
}
