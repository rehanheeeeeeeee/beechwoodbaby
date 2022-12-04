import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";

export default function Applayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div className="bg-primary">
      <Navbar />
      {children}
    </div>
  );
}
