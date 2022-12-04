import Script from "next/script";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
}
