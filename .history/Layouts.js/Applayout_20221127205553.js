import React from "react";
import Navbar from "../components/Navbar";

export default function Applayout({ children }) {
  return (
    <div className="bg-primary">
      <Navbar />
      {children}
    </div>
  );
}
