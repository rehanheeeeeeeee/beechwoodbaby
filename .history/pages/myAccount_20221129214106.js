import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AddressDetails from "../components/MyAccount/AddressDetails";
import UpdatePassword from "../components/MyAccount/UpdatePassword";
import UserDetails from "../components/MyAccount/UserDetails";

const styles = {
  heading: "my-5 text-center font-extrabold text-2xl md:text-4xl",
  userInfoform: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
  button:
    "flex my-4 px-3 text-white bg-gradient-to-tr from-red-400 to-red-600 transition-all ease-in duration-100 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 hover:shadow-lg shadow-sm whitespace-nowrap  rounded",
};

export default function MyAccount() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [district, setDistrict] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "address1":
        setAddress1(value);
        break;
      case "address2":
        setAddress2(value);
        break;
      case "pincode":
        setPincode(value);
        break;
      case "district":
        setDistrict(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "confirmNewPassword":
        setConfirmNewPassword(value);
        break;
      default:
        break;
    }
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
      <AddressDetails
        state={state}
        handleChange={handleChange}
        city={city}
        district={district}
        address1={address1}
        address2={address2}
        pincode={pincode}
      />
      <UpdatePassword
        newPassword={newPassword}
        confirmNewPassword={confirmNewPassword}
        handleChange={handleChange}
      />
      <button className={styles.button}>Log Out</button>
    </div>
  );
}
