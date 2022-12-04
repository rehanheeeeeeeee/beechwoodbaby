import Image from "next/image";
import React from "react";

const styles = {
  container: "bg-cartBg flex flex-col items-center",
  logo: "w-32 h-32 object-contain",
};

export default function Footer() {
  return (
    <div className={styles.container}>
      <Image
        src={"/logo.png"}
        width={1920}
        height={1080}
        alt=""
        className={styles.logo}
      />
    </div>
  );
}
