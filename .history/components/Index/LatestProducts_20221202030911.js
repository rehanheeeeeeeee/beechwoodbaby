import React from "react";

const styles = {
  container: "py-12",
};

export const getServerSideProps = async () => {
  const response = await fetch(
    `${proccess.env.NEXT_PUBLIC_HOST}/api/getLatestProducts`
  );
  const latestProducts = await response.json();
  return {
    props: {
      latestProducts: JSON.parse(JSON.stringify(latestProducts)),
    },
  };
};

export default function LatestProducts({ latestProducts }) {
  console.log(latestProducts);
  return <div className={styles.container}>LatestProducts</div>;
}
