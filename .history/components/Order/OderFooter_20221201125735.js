import React from "react";

const styles = {
  container: " flex w-full justify-between items-center",
};

export default function OderFooter({ email, name, address, phone }) {
  return (
    <div className={styles.container}>
      <div className="flex items-center">
        <div>Shipping Address</div>
        <div>User Info</div>
      </div>
      <div>Contact</div>
    </div>
  );
}
