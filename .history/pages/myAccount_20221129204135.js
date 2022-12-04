import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UserDetails from "../components/MyAccount/UserDetails";

const styles = {
  heading: "my-5 text-center font-extrabold text-2xl md:text-4xl",
  userInfoform: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
};

export default function MyAccount() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className="p-5">
      <p className={styles.heading}>ACCOUNT DETAILS</p>
      <UserDetails
        email={email}
        handleChange={handleChange}
        phone={phone}
        name={name}
      />
    </div>
  );
}
