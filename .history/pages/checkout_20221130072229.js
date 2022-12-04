import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket, selectBasketTotal } from "../redux/cartSlice";
import BillnigDetailsForm from "../components/Checkout/BillnigDetailsForm";
import { selectUser } from "../redux/userSlice";

const styles = {
  container: "",
  wrapper: "",
  billingDetails: "",
};

export default function Checkout() {
  const basketTotal = useSelector(selectBasketTotal);
  const basket = useSelector(selectBasket);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleChange = async (e) => {
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

      case "pinCode":
        setPinCode(value);
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

      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <BillnigDetailsForm />
      </div>
    </div>
  );
}
