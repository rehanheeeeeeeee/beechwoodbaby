import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const styles = {
  slider: "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",
};

export default function Carousel() {
  let settings = {
    dota: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplat: true,
  };
  return (
    <Slider {...settings} className={styles.slider}>
      <div>
        <Image
          width={1920}
          height={1080}
          alt=""
          src="https://dummyimage.com/400x400"
        />
      </div>
      <div>
        <Image
          width={1920}
          height={1080}
          alt=""
          src="https://dummyimage.com/400x400"
        />
      </div>
      <div>
        <Image
          width={1920}
          height={1080}
          alt=""
          src="https://dummyimage.com/400x400"
        />
      </div>
    </Slider>
  );
}
