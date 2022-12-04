import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

export default function Myorders() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/");
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getOrders`, {
      method: "POST",
      body: user,
    });
  }, [router]);
  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Orders</p>
    </div>
  );
}
