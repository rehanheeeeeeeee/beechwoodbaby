import React from "react";
import Input from "../MyAccount/Input";

const styles = {
  billingDetails: "md:w-[60%] w-full p-5 flex flex-wrap items-center",
};

export default function BillnigDetailsForm({
  name,
  email,
  phone,
  pincode,
  city,
  state,
  district,
  address1,
  address2,
  handleChange,
}) {
  const inputs = [
    {
      value: name,
      name: "name",
      type: "text",
    },
    {
      value: email,
      name: "email",
      type: "text",
      readOnly: true,
    },
    {
      value: phone,
      name: "phone",
      type: "number",
    },
    {
      value: city,
      name: "city",
      type: "text",
    },
    {
      value: state,
      name: "state",
      type: "text",
    },
    {
      value: district,
      name: "district",
      type: "text",
    },
    {
      value: pincode,
      name: "pincode",
      type: "number",
    },
    {
      value: address1,
      name: "address1",
      type: "text",
      textArea: true,
    },
    {
      value: address2,
      name: "address2",
      type: "text",
      textArea: true,
    },
  ];

  return (
    <div className={styles.billingDetails}>
      <form>
        {inputs.map((input, index) => (
          <Input
            key={index}
            value={input.value}
            name={input.name}
            handleChange={handleChange}
            type={input.type}
            readOnly={input.readOnly}
            textArea={input.textArea}
          />
        ))}
      </form>
    </div>
  );
}
