import React from "react";

export const getServerSideProps = (context) => {
  console.log(context.query);
  return {
    props: {},
  };
};

export default function Product() {
  return <div>product</div>;
}
