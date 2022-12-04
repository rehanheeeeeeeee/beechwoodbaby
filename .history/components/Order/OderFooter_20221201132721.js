import Link from "next/link";
import React from "react";

const styles = {
  container:
    "md:flex grid grid-cols-1 w-full justify-between py-5  items-center gap-4 md:gap-0",
  info: "font-light text-xs md:text-base",
};

export default function OderFooter({ email, name, address, phone }) {
  return (
    <div className={styles.container}>
      <div className="flex  justify-between w-full items-start space-x-3 md:space-x-8">
        <div className="w-1/2">
          <p className="font-semibold text-medium py-2">Shipping Address</p>
          <p className={styles.info}>{name}</p>
          <p className={styles.info}>
            {address.address1} {address.address2},
          </p>
          <p className={styles.info}>
            {address.city} {address.state},
          </p>
          <p className={styles.info}>{address.pincode}</p>
        </div>
        <div className="w-1/2">
          {" "}
          <p className="font-semibold text-medium py-2">User Information</p>
          <p className={styles.info}>{name}</p>
          <p className={styles.info}>{email},</p>
          <p className={styles.info}>{phone}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <Link className={styles.btn}>Contact Us</Link>
        <Link className={styles.btn}>RETURN</Link>
      </div>
    </div>
  );
}
