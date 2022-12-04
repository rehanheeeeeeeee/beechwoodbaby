import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket, selectBasketTotal } from "../redux/cartSlice";
import BillnigDetailsForm from "../components/Checkout/BillnigDetailsForm";
import { selectUser } from "../redux/userSlice";
import { useRouter } from "next/router";
import CartProduct from "../components/Sidebar/CartProduct";
import Script from "next/script";
import { GoSell } from "@tap-payments/gosell";
import Head from "next/head";

const styles = {
  container: "",
  wrapper: "",
};

export default function Checkout() {
  const basketTotal = useSelector(selectBasketTotal);
  const basket = useSelector(selectBasket);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [district, setDistrict] = useState("");

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

      case "pincode":
        setPinCode(value);
        break;

      case "city":
        setCity(value);
        break;

      case "state":
        setState(value);
        break;
      case "district":
        setDistrict(value);
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

  useEffect(() => {
    const { email } = JSON.parse(localStorage.getItem("user"));
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.email);
        setName(data.username);
        setPhone(data.phone);
        setState(data.state);
        setCity(data.city);
        setDistrict(data.district);
        setPinCode(data.pincode);
        setAddress1(data.address1);
        setAddress2(data.address2);
      });
  }, [router]);

  return (
    <div className={styles.container}>
      {/* <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link
          href="https://goSellJSLib.b-cdn.net/v2.0.0/css/gosell.css"
          rel="stylesheet"
        />
  </Head>*/}
      <Script
        type="text/javascript"
        src="https://goSellJSLib.b-cdn.net/v2.0.0/js/gosell.js"
      ></Script>
      <div className={styles.wrapper}>
        <BillnigDetailsForm
          name={name}
          email={email}
          phone={phone}
          pincode={pincode}
          city={city}
          state={state}
          district={district}
          address1={address1}
          address2={address2}
          handleChange={handleChange}
        />
        <div className="px-5 py-3">
          <p className="py-3 font-semibold text-xl">2{")"} Cart Products</p>
          {basket?.map((item, index) => (
            <CartProduct key={index} white={true} item={item} />
          ))}
        </div>
        <div className="my-8 px-5">
          <p className="font-semibold text-xl my-3">3{")"} Amount Details</p>
          <div className="px-6">
            <div className="flex font-semibold text-xl w-full py-2 justify-between items-center text-textColor">
              <p>Subtotal</p>
              <p>{basketTotal} BHD</p>
            </div>
            <div className="flex font-semibold text-xl border-b border-cartItem w-full py-2 justify-between items-center text-textColor">
              <p>Delivery</p>
              <p>5.00 BHD</p>
            </div>
            <div className="flex font-bold text-2xl w-full my-2 py-2 justify-between text-headingColor items-center">
              <p>Total</p>
              <p>{basketTotal + 5.0} BHD</p>
            </div>
          </div>
        </div>
        <button id="openLightBox" onClick={() => GoSell.openLightBox()}>
          open goSell LightBox
        </button>
        <button id="openPage" onClick={() => GoSell.openPaymentPage()}>
          open goSell Page
        </button>
        <GoSell
          gateway={{
            publicKey: "pk_test_Vlk842B1EA7tDN5QbrfGjYzh",
            language: "en",
            contactInfo: true,
            supportedCurrencies: "all",
            supportedPaymentMethods: "all",
            saveCardOption: true,
            customerCards: true,
            notifications: "standard",
            backgroundImg: {
              url: "imgURL",
              opacity: "0.5",
            },
            callback: () => {},
            labels: {
              cardNumber: "Card Number",
              expirationDate: "MM/YY",
              cvv: "CVV",
              cardHolder: "Name on Card",
              actionButton: "Pay",
            },
            style: {
              base: {
                color: "#535353",
                lineHeight: "18px",
                fontFamily: "sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                  color: "rgba(0, 0, 0, 0.26)",
                  fontSize: "15px",
                },
              },
              invalid: {
                color: "red",
                iconColor: "#fa755a ",
              },
            },
          }}
          customer={{
            first_name: "First Name",
            middle_name: "Middle Name",
            last_name: "Last Name",
            email: "demo@email.com",
            phone: {
              country_code: "965",
              number: "99999999",
            },
          }}
          order={{
            amount: 100,
            currency: "KWD",
            items: [
              {
                id: 1,
                name: "item1",
                description: "item1 desc",
                quantity: "x1",
                amount_per_unit: "KD00.000",
                discount: {
                  type: "P",
                  value: "10%",
                },
                total_amount: "KD000.000",
              },
              {
                id: 2,
                name: "item2",
                description: "item2 desc",
                quantity: "x2",
                amount_per_unit: "KD00.000",
                discount: {
                  type: "P",
                  value: "10%",
                },
                total_amount: "KD000.000",
              },
              {
                id: 3,
                name: "item3",
                description: "item3 desc",
                quantity: "x1",
                amount_per_unit: "KD00.000",
                discount: {
                  type: "P",
                  value: "10%",
                },
                total_amount: "KD000.000",
              },
            ],
            shipping: null,
            taxes: null,
          }}
          transaction={{
            mode: "charge",
            charge: {
              saveCard: false,
              threeDSecure: true,
              description: "Test Description",
              statement_descriptor: "Sample",
              reference: {
                transaction: "txn_0001",
                order: "ord_0001",
              },
              metadata: {},
              receipt: {
                email: false,
                sms: true,
              },
              redirect: "https://localhost:3000/",
              post: null,
            },
          }}
        />
      </div>
    </div>
  );
}
