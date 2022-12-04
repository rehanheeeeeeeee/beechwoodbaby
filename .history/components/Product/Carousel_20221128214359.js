import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const styles = {
  slider: "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",
  icon:'text-2xl m-2'
};

const CarouselImage = (image) =>
  image && (
    <div>
      <Image width={1920} height={1080} alt="" src={image} />
    </div>
  );

export default function Carousel({ images }) {
  let settings = {
    dota: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplat: true,
    nextArrow:<IoIosArrowDroprightCircle className={styles.icon}/>
    prevArrow:<IoIosArrowDropleftCircle  className={styles.icon}/>
  };
  return (
    <Slider {...settings} className={styles.slider}>
      {images.map((image, index) => (
        <CarouselImage key={index} image={image} />
      ))}
    </Slider>
  );
}
