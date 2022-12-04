import React from "react";
import { useDispatch } from "react-redux";

const styles = {
  container: "",
};

export default function CartProduct({ item }) {
  const { name, _id, images, quantity } = item;
  const dispatch = useDispatch();
  return <div className={styles.container}></div>;
}
