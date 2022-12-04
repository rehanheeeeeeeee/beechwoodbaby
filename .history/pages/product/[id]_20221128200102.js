import React from "react";

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  return {
    props: {},
  };
};

export default function Product() {
  return <div>product</div>;
}
