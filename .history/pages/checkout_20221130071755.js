import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const styles = {
  container: "",
  wrapper: "",
  billingDetails: "",
};

export default function Checkout() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.billingDetails}>
          <form></form>
        </div>
      </div>
    </div>
  );
}
