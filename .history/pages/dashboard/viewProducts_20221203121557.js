import React from "react";

export const getServerSideProps = async() =>{
  c  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getProducts`,
    {
      method: "POST",
      body: JSON.stringify({ category: "All Categories" }),
    }
  );
}


export default function ViewProducts() {
  return <div>ViewProducts</div>;
}
