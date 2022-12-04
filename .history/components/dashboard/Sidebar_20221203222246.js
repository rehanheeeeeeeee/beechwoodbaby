import Image from "next/image";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-[230px] bg-headingColor sticky h-screen">
      <Image
        src={"/logo.png"}
        width={1920}
        height={1080}
        alt=""
        className="h-24 w-24 object-contain"
      />
    </div>
  );
}
