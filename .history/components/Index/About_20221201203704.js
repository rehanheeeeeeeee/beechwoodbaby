import Image from "next/image";
import React from "react";

const styles = {
  container: "p-7 grid grid-cols-1 md:grid-cols-2 w-full",
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.container}></div>
      <Image
        alt=""
        className="rounded-md"
        width={1920}
        height={1080}
        src={"/about.jpg"}
      />
    </div>
  );
}
