import React from "react";

const styles = {
  container: " flex w-full justify-between py-5 items-center",
};

export default function OderFooter({ email, name, address, phone }) {
  return (
    <div className={styles.container}>
      <div className="flex items-center space-x-4 md:space-x-8">
        <div>
          <p className="font-semibold text-medium py-3">Shipping Address</p>
          <p>{name}</p>
          <p>
            {address.address1} {address.address2},
          </p>
          <p>
            {address.city} {address.state},
          </p>
          <p>{address.pincode}</p>
        </div>
        <div>User Info</div>
      </div>
      <div>Contact</div>
    </div>
  );
}
