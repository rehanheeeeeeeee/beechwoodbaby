import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);
  return <div className="bg-primary">{children}</div>;
}
