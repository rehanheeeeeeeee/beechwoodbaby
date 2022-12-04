import React from "react";

import { Formik } from "formik";

const styles = {
  container: "",
  wrapper: "",
  billingDetails: "",
};

export default function Checkout() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form>
          <div className={styles.billingDetails}></div>
        </form>
      </div>
    </div>
  );
}
