import React, { useEffect, useRef } from "react";

export default function PaypalBtn() {
  const refPaypalBtn = useRef();
  useEffect(() => {}, []);
  return <div ref={refPaypalBtn}></div>;
}
