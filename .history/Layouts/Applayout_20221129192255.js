import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { setBasket } from "../redux/cartSlice";

export default function Applayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))));
  }, [localStorage.getItem("basket")]);
  return (
    <div className="bg-primary">
      <Navbar />
      {children}
    </div>
  );
}
