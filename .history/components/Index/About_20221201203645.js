import Image from "next/image";
import React from "react";

const styles = {
  container: "p-7 grid grid-cols-1 md:grid-cols-2",
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.container}></div>
      <Image alt="" width={1920} height={1080} src={"/about.jpg"} />
    </div>
  );
}
