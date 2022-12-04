import React from "react";

const styles = {
  container:
    "md:flex grid grid-cols-1 w-full justify-between py-5  items-center",
};

export default function OderFooter({ email, name, address, phone }) {
  return (
    <div className={styles.container}>
      <div className="flex items-center space-x-4 md:space-x-8">
        <div className="flex items-center jsutify-between">
          <p className="font-semibold text-medium py-2">Shipping Address</p>
          <p className="font-light">{name}</p>
          <p className="font-light">
            {address.address1} {address.address2},
          </p>
          <p className="font-light">
            {address.city} {address.state},
          </p>
          <p className="font-light">{address.pincode}</p>
        </div>
        <div>User Info</div>
      </div>
      <div>Contact</div>
    </div>
  );
}
