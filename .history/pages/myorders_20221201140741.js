import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

export default function Myorders() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Orders</p>
    </div>
  );
}
