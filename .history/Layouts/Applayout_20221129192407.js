import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { setBasket } from "../redux/cartSlice";

export default function Applayout({ children }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(localStorage.getItem("basket"));
  useEffect(() => {
    dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))));
  }, [user]);
  return (
    <div className="bg-primary">
      <Navbar />
      {children}
    </div>
  );
}
