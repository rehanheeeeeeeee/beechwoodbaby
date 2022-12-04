import React from "react";

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getLatestProducts`
  );
  const latestProducts = await response.json();
};

export default function LatestProducts() {
  return <div>LatestProducts</div>;
}
