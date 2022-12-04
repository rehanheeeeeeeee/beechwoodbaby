import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectBasket, selectBasketTotal } from "../../redux/cartSlice";

export default function PaypalBtn({
  name,
  email,
  phone,
  pincode,
  city,
  state,
  district,
  address1,
  address2,
}) {
  const refPaypalBtn = useRef();
  const basketTotal = useSelector(selectBasketTotal);
  const basket = useSelector(selectBasket);
  useEffect(() => {
    paypal
      .Buttons({
        // Sets up the transaction when a payment button is clicked
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: basketTotal, // Can also reference a variable or function
                },
              },
            ],
          });
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (orderData) {
            const transaction =
              orderData.purchase_units[0].payments.captures[0];
            fetch(`${process.env.NEXT_PUBLIC_HOST}/api/createOrder`, {
              method: "POST",
              body: JSON.stringify({
                orderId: transaction.id,
                name,
                email,
                phone,
                adddress: {
                  pincode,
                  city,
                  state,
                  district,
                  address1,
                  address2,
                },
                amount: basketTotal,
                products: basket,
              }),
            });
          });
        },
      })
      .render(refPaypalBtn.current);
  }, []);
  return <div ref={refPaypalBtn}></div>;
}
