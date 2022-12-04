import React from "react";

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getLatestProducts`
  );
  const latestProducts = await response.json();
  return {
    props: {
      latestProducts: JSON.parse(JSON.stringify(latestProducts)),
    },
  };
};

export default function LatestProducts({ latestProducts }) {
    console.log(latestProducts)
  return <div>LatestProducts</div>;
}
