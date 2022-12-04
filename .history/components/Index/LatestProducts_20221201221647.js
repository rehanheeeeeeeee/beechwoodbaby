import React from "react";

const styles = {
  container: "py-12",
};

export const getServerSideProps = async () => {
  const response = await fetch(
    `${proces.env.NEXT_PUBLIC_HOST}/api/getLatestProducts`
  );
  const latestProducts = await response.json();
};

export default function LatestProducts() {
  return <div className={styles.container}>LatestProducts</div>;
}
