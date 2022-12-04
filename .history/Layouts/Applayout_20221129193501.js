import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { setBasket } from "../redux/cartSlice";
import { setUser } from "../redux/userSlice";

export default function Applayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
  }, []);
  return (
    <div className="bg-primary">
      <Navbar />
      {children}
    </div>
  );
}
