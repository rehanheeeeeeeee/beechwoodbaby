import React from "react";

export const getServerSideProps = (context) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getLatestProducts`)
};

export default function LatestProducts() {
  return <div>LatestProducts</div>;
}
