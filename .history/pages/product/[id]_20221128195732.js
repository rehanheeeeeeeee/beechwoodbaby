import React from "react";

export const getServerSideProps = (context) => {
  const id = context.query.id;

  return {
    props: {},
  };
};

export default function Product() {
  return <div>product</div>;
}
