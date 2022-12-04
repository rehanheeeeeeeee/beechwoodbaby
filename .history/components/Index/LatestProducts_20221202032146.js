import React from "react";

const styles = {
  container: "py-12",
};

export const getServerSideProps = async () => {
  fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getLatestProducts`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
  // const data = await response.json();
  return {
    props: {
      latestProducts: "hALO GIYS WHENJAKJF",
    },
  };
};

export default function LatestProducts(props) {
  console.log(props);
  return <div className={styles.container}>LatestProducts</div>;
}
