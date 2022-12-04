import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-contain bg-[#f9f9f9] shadow-md group-hover:scale-105 group-hover:shadow-lg object-center w-full h-full block"
          src="https://instagram.fbah1-1.fna.fbcdn.net/v/t51.2885-15/316632682_548808750365231_6055894799578111820_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fbah1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=xaiSQwnEbWAAX9Z4jvw&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk3ODczOTg4MzA2MTYzMzQ2Nw%3D%3D.2-ccb7-5&oh=00_AfAfKf3Uvusr2ulJiZWmzDEzcSRqViAxnydE3Sl75oXiCA&oe=638A7B7E&_nc_sid=30a2ef"
          width={1920}
          height={1080}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          The Catalyzer
        </h2>
        <p className="mt-1">$16.00</p>
      </div>
    </div>
  );
}
