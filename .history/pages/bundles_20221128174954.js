import React from "react";

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "Bundles" }),
    }
  );
};

export default function Bundles() {
  return <div>Bundles</div>;
}
