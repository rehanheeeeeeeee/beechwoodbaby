import React from "react";

const styles = {
  container: "p-5",
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUsers`);
  const users = await response.json();
};

export default function Dashboard() {
  return <div className={styles.container}>Dashboard</div>;
}
