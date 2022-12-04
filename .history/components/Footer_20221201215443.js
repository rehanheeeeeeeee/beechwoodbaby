import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
const styles = {
  container: "bg-cartBg flex flex-col items-center px-3 pb-3",
  logo: "w-32 h-32 object-contain -mt-16",
  pageLink: "text-md font-medium text-slate-50",
  icon: "text-slate-50 text-2xl",
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

const socialMediaLinks = [
  <AiOutlineInstagram key={0} className={styles.icon} />,
  <BsFacebook key={1} className={styles.icon} />,
  <BsTwitter key={2} className={styles.icon} />,
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
      <div className="py-2 w-full flex justify-center space-x-5">
        {pageLinks.map(({ name, link }, index) => (
          <Link key={{ index }} href={`/${link}`} className={styles.pageLink}>
            {name}
          </Link>
        ))}
      </div>
      <div className="py-5 w-full flex justify-center space-x-7 ">
        {socialMediaLinks}
      </div>
      <p className="w-full text-center text-slate-50 text-xs py-3">
        STARBUCKS and the Starbucks® logo are used under license by Nestlé. Pike
        Place is a registered trademark of The Pike Place Market PDA, used under
        license. Nespresso® and NESCAFÉ® Dolce Gusto® are registered trademarks
        of Société de Produits Nestlé S.A.. All other trademarks are the
        property of their owners.
      </p>
    </div>
  );
}
