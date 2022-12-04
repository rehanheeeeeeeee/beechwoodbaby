import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Myorders() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className={styles.container}>
      <p>My Orders</p>
    </div>
  );
}
