import Image from "next/image";
import Link from "next/link";
import React from "react";

const styles = {
  container: "bg-cartBg flex flex-col items-center",
  logo: "w-32 h-32 object-contain -mt-16",
  pageLink: "text-md font-medium text-slate-50",
};

const pageLinks = [
  {
    name: "About Us",
    link: "aboutus",
  },
  {
    name: "Contact Us",
    link: "contactus",
  },
];

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
      <div className="py-2 w-full flex justify-center">
        {pageLinks.map(({ name, link }, index) => (
          <Link key={{ index }} href={`/${link}`} className={styles.pageLink}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
