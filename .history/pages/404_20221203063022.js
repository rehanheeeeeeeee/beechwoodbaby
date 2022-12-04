import Image from "next/image";
import React from "react";

export default function ErrorPage() {
  return (
    <div>
      <Image
        alt=""
        width={1920}
        height={1080}
        src={"/logo.png"}
        className="h-[400px] w-[400px]"
      />
      <p>Error 404 This Page Does not Exist</p>
    </div>
  );
}
