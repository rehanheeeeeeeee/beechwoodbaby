import React from "react";

const styles = {
  addressForm: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
  heading: "font-semibold text-xl my-2",
};

export default function AddressDetails() {
  return (
    <div className="mt-3">
      <p className={styles.heading}>2{")"} AddressDetails</p>
      <div className={styles.addressForm}></div>
    </div>
  );
}
