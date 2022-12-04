import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Myorders() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, [router]);
  return <div>myorders</div>;
}
