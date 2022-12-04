import { useRouter } from "next/router";
import React from "react";

export default function MyAccount() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, [router]);
  return <div>MyAccount</div>;
}
