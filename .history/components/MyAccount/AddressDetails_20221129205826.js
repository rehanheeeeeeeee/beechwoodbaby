import React from "react";

const styles = {
  addressForm: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",

  heading: "my-5 text-center font-extrabold text-2xl md:text-4xl",
};

export default function AddressDetails() {
  return (
    <div>
      <p className={styles.heading}>2{")"} AddressDetails</p>
      <div className={styles.addressForm}></div>
    </div>
  );
}
