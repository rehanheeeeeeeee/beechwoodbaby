import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectBasket, selectBasketTotal } from "../../redux/cartSlice";

export default function PaypalBtn({ createNewOrder }) {
  const refPaypalBtn = useRef();
  const basketTotal = useSelector(selectBasketTotal);
  const basket = useSelector(selectBasket);
  useEffect(() => {
    if (refPaypalBtn.current.childElementCount === 0) {
      paypal
        .Buttons({
          style: {
            layout: "vertical",
            shape: "pill",
            label: "paypal",
          },
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
              createNewOrder(transaction.id);
            });
          },
        })
        .render(refPaypalBtn.current);
    }

    console.log(refPaypalBtn.current.childElementCount);
  }, []);
  return <div ref={refPaypalBtn}> </div>;
}
