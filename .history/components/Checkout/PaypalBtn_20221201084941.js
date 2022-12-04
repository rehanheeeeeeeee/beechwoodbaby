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
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: basketTotal,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(function (orderData) {
              console.log(
                "Capture result",
                orderData,
                JSON.stringify(orderData, null, 2)
              );
              const transaction =
                orderData.purchase_units[0].payments.captures[0];
              createNewOrder(transaction.id, "Paid");
            });
          },
        })
        .render(refPaypalBtn.current);
    }
  }, []);
  return <div ref={refPaypalBtn}> </div>;
}
