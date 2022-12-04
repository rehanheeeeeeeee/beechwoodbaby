import React from "react";
import { useDispatch } from "react-redux";

export default function CartProduct({ item }) {
  const { name, _id, images, quantity } = item;
  const dispatch = useDispatch();
  return <div></div>;
}
